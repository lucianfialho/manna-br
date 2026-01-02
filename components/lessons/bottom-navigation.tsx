"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    href: "/licoes",
    label: "Lessons",
    icon: <Home className="w-[30px] h-[30px]" />,
  },
  {
    href: "/perfil",
    label: "Me",
    icon: <User className="w-[30px] h-[30px]" />,
  },
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="flex items-center justify-around h-[52px] max-w-md mx-auto px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-[8.4px] px-[5px] py-2 rounded-[10.8px] transition-all",
                isActive
                  ? "bg-[#DDF4FF] border-2 border-[#84D7FF]"
                  : "border-2 border-transparent"
              )}
            >
              <div className={cn(
                isActive ? "text-primary" : "text-foreground"
              )}>
                {item.icon}
              </div>
              <span className={cn(
                "text-base font-normal",
                isActive ? "text-foreground" : "text-foreground-muted"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
