import Link from 'next/link';
import styles from '../../app/LocalNav.module.css';

const LocalNav = () => {
  return (
    <nav className={styles.LocalNav}>
      <div className={styles.LNlogo}>
        <Link href="/">RJK3R</Link>
      </div>
      <div className={styles.LNnavLinks}>
        <Link href="/works" className={styles.active}>Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/social">Social</Link>
        <Link href="/achievements">Achievements</Link>
        <Link href="/ideas">Ideas</Link>
      </div>
    </nav>
  );
};

export default LocalNav;
