import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/robsu17.png" />
          <div className={styles.authorInfo}>
            <strong>Robson Wendel</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='11 de mario às 8:13h' dateTime='2022-05-11 08:13:30'>Publicado há 1 hora</time>
      </header>

      <div className={styles.content}>
        <p>Fala Galera</p>

        <p>Acabei de subir mais um projeto no portifólio. é um projeto que fiz no NLW Return, evento da rocketseat</p>
        <p><a href="#">jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}