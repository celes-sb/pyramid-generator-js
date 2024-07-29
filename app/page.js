import styles from "./page.module.css";
import PyramidGenerator from './pyramid.js';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Pyramid Generator</h1>
        <PyramidGenerator />
    <footer className={styles.footer}>
        <a href="https://www.github.com/celes-sb" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
          <i className="fab fa-github"></i> Made by Celeste S. Bareiro
        </a>
      </footer>
    </main>
  );
}
