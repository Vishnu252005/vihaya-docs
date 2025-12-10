"use client";

import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative h-8 w-8 flex-shrink-0">
        <Image
          src="/images/logo_only.png"
          alt="Vihaya Logo"
          width={32}
          height={32}
          className="object-contain transition-opacity group-hover:opacity-80"
          priority
        />
      </div>
      <span className="font-bold text-sm">Vihaya</span>
    </Link>
  );
}
