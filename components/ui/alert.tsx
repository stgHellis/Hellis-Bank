import React from "react";

interface AlertProps {
  children: React.ReactNode;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded ${className}`}
    >
      {children}
    </div>
  );
};

export const AlertDescription: React.FC<AlertProps> = ({
  children,
  className,
}) => {
  return <p className={`mt-2 ${className}`}>{children}</p>;
};
