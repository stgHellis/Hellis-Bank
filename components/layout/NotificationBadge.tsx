// app/components/NotificationBadge.tsx
import React from "react";

interface NotificationBadgeProps {
  count: number;
}

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count,
}) => {
  if (count === 0) return null;

  return (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
      {count > 99 ? "99+" : count}
    </span>
  );
};
