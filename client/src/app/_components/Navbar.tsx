import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
    return (
    <nav className={styles.nav}>
        <li id={styles.title}>
           <Image 
        src="/images/sherb.png"
        width={75}
        height={75}
        alt="sherb"
        id={styles.sherb} />
        <a href="/" className={styles.title}>Sherb</a>
        </li>
        <div className={styles.middleTitle}>MapleStory</div>
    </nav>
    )
}