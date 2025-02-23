import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
    <nav className={styles.nav}>
        <a href="/" className={styles.title}>Sherb</a>
        <ul>
            <li className={styles.active}>
                <a href="/test1">test1</a>
            </li>
            <li className={styles.active}>
                <a href="/test2">test2</a>
            </li>
        </ul>
    </nav>
    )
}