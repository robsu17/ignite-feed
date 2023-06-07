import styles from './Header.module.css'
import headerImg from '../assets/header.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={headerImg} alt="header" />
      <h2>Ignite Feed</h2>
    </header>
  )
}