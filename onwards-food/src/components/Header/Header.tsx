import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../NavLink/NavLink";
import HeaderBackground from "./components/HeaderBackground/HeaderBackground";
import styles from "./styles/Header.module.css";

function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logo} alt="logo" priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Food community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
