"use client";

import { useAppointmentModal } from "@/contexts/AppointmentModalContext";
import { PrimaryButton, PrimaryButtonProps } from "./PrimaryButton";

export function BookAppointmentButton(props: PrimaryButtonProps) {
  const { openModal } = useAppointmentModal();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }
    openModal();
  };

  return (
    <PrimaryButton {...props} onClick={handleClick}>
      {props.children}
    </PrimaryButton>
  );
}
