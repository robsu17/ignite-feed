import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

import backgroundImg from '../assets/background-sidebar.svg'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={backgroundImg}/>
      
      <div className={styles.profile}>
        <Avatar hasBorder imageLink="https://github.com/robsu17.png"/>
        
        <strong>Robson Wendel</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/> Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}