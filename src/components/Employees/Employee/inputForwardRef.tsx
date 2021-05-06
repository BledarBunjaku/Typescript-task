import React from "react";

type InputProps = {
  type: string;
  placeholder: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  ref: HTMLInputElement;
};

export const InputRef = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, onKeyDown }, ref) => (
    <input
      type={type}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      ref={ref}
    />
  )
);
