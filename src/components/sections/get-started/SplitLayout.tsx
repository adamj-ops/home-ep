import { ReactNode } from "react";

interface SplitLayoutProps {
  left: ReactNode;
  right: ReactNode;
}

export default function SplitLayout({ left, right }: SplitLayoutProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] min-h-[calc(100vh-80px)]">
      {/* Left (dark panel) */}
      <div className="bg-[var(--dark)]">{left}</div>

      {/* Right (form panel) */}
      <div className="bg-white">{right}</div>
    </div>
  );
}
