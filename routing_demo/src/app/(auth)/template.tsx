"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import './styles.css' // tailwind group 

const navLinks = [
  { name: "Register ", href: "/register" },
  { name: "Login ", href: "/login" },
  { name: "Forgot password ", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [input, setInput] = useState("")

  const pathName = usePathname();
  return (
    <div>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLinks.map((link, index) => {
        const isActive =
          pathName === link.href ||
          (pathName.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            key={index}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
