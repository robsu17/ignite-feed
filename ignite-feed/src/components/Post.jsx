import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
  
  const [comments, setComments] = useState(['Post muito bacana'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedAt)

  function handleCreateNewComent () {
    event.preventDefault()
    if (!newCommentText) {
      return false
    }
    setComments([...comments, newCommentText ])
    setNewCommentText('')
  }

  function handleNewCommentChange () {
    setNewCommentText(event.target.value)
  }
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar imageLink={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedAt} dateTime={publishedAt}>
          {publishedDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          } 
        })}
      </div>

      <form onSubmit={handleCreateNewComent} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea onChange={handleNewCommentChange} name="comment" placeholder="Deixe um comentário" value={newCommentText}/>

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment}/>
        })}
      </div>
    </article>
  )
}