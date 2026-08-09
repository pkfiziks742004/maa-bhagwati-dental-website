"use client";

import { useRouter } from "next/navigation";
import { PrimaryButton, PrimaryButtonProps } from "./PrimaryButton";

export function BookAppointmentButton(props: PrimaryButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }
    router.push("/appointment/");
  };

  return (
    <PrimaryButton {...props} onClick={handleClick}>
      {props.children}
    </PrimaryButton>
  );
}
