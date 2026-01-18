"use client";

import { useRouter } from "next/navigation";
import { HeroUIProvider } from "@heroui/react";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push} useHref={(href: string) => href}>
      {children}
    </HeroUIProvider>
  );
}
