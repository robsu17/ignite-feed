import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
  
  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedAt)

  function handleCreateNewComent () {
    event.preventDefault()
    setComments([...comments, newCommentText ])
    setNewCommentText('')
  }

  function handleNewCommentChange () {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid () {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment (commentToDelete) {
    const commentsWithOutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithOutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0
  
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
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          } 
        })}
      </div>

      <form onSubmit={handleCreateNewComent} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          onChange={handleNewCommentChange} 
          name="comment" 
          placeholder="Deixe um comentário" 
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}