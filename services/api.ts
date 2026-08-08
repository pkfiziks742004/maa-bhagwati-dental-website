/**
 * ERP API Integration Layer
 * 
 * This file handles all outgoing requests to the existing ERP system.
 * It is completely decoupled from the Next.js frontend to allow for easy scaling,
 * authentication upgrades, and interceptor attachments.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_ERP_API_URL || "https://api.erp-maabhagwati.com/v1";

// Types
export interface AppointmentPayload {
  patient: {
    name: string;
    mobile: string;
    email?: string;
    age: string;
    gender: string;
    city: string;
  };
  appointment: {
    department: string;
    treatment: string;
    doctorId: string;
    date: string; // ISO String
    timeSlot: string;
    notes?: string;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

/**
 * Standardized fetch wrapper for the ERP API
 */
async function fetchERP<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const headers = {
    "Content-Type": "application/json",
    // "Authorization": `Bearer ${process.env.NEXT_PUBLIC_ERP_API_TOKEN}`, // Future Auth Support
    ...options.headers,
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    // In a real scenario, this would parse the ERP's specific error structure
    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "An error occurred while connecting to the ERP.",
        errors: data.errors,
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Network error. Please try again.",
    };
  }
}

/**
 * Submit an Appointment Request to the ERP
 */
export async function submitAppointment(payload: AppointmentPayload): Promise<ApiResponse<{ appointmentId: string }>> {
  // Simulating network delay for realistic frontend loading states
  // Remove this when real ERP URL is provided
  if (!process.env.NEXT_PUBLIC_ERP_API_URL) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: { appointmentId: `APT-${Math.floor(Math.random() * 10000)}` },
          message: "Appointment successfully created in ERP."
        });
      }, 1500);
    });
  }

  // Real ERP call
  return fetchERP<{ appointmentId: string }>("/appointments", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
