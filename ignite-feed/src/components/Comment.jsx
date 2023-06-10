import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/robsu17.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Robson Wendel</strong>
              <time title='11 de maio às 8:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1 hora atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, Parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}