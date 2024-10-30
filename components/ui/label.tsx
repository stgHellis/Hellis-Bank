import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <label className={`block mb-1 ${className}`} {...props}>
      {children}
    </label>
  );
};
