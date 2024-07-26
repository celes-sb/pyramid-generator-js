import styles from "./page.module.css";
import PyramidGenerator from './pyramid.js';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Pyramid Generator</h1>
        <PyramidGenerator />
    </main>
  );
}
