"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      {/* Basic */}
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <p>hii</p>
            <p className="font-bold">ACME</p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/hero">Hero</Link>
            </li>
            <li>
              <Link href="/task">Task</Link>
            </li>
          </ul>
        </header>
      </nav>

      {/* With right-aligned content */}
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div>Logo</div>
          <ul className="flex items-center gap-4">
            <li>
              <Button>Sign Up</Button>
            </li>
          </ul>
        </header>
      </nav>
    </>
  );
}
