"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";

function NavLink({ href, children }: { href: string; children: string }) {
  const path = usePathname();
  return (
    <Link href={href} className={path === href ? styles.active : undefined}>
      {children}
    </Link>
  );
}

export default NavLink;
