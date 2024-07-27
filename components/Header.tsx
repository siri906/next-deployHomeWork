import Link from "next/link";
import styles from "../styles/header.module.scss";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu_list}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
