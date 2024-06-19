"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-stone-700 text-white flex flex-row items-center px-4">
      <Link href="/">
        <div id="logo" className="font-extrabold text-3xl text-white mr-4">
          Multi-thematic forum
        </div>
      </Link>
    </header>
  );
}
