"use client"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navigation() {
    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-3">
            <Link href='/' className={pathname === '/' ? 'mr-4 font-bold' : "mr-4 text-blue-500"}>Home</Link>
            <Link href='/about' className={pathname === '/about' ? 'mr-4 font-bold' : "mr-4 text-blue-500"}>About</Link>
            <Link href='/products/1' className={pathname.startsWith('/products/1') ? 'mr-4 font-bold' : "mr-4 text-blue-500"}>Product 1</Link>
            <div className="flex gap-2 items-center">
                <SignedOut>
                    <SignInButton mode="modal" />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}