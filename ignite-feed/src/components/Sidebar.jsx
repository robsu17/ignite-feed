import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

import backgroundImg from '../assets/background-sidebar.svg'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={backgroundImg}/>
      
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/robsu17.png"/>
        
        <strong>Leslie Alexander</strong>
        <span>Ui Designer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/> Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}