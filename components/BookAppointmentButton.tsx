"use client";

import { useAppointmentModal } from "@/contexts/AppointmentModalContext";
import { PrimaryButton, PrimaryButtonProps } from "./PrimaryButton";

export function BookAppointmentButton(props: PrimaryButtonProps) {
  const { openModal } = useAppointmentModal();

  return (
    <PrimaryButton {...props} onClick={openModal}>
      {props.children}
    </PrimaryButton>
  );
}
