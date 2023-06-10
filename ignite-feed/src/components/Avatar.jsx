import styles from './Avatar.module.css'

export function Avatar({imageLink, hasBorder}) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={imageLink}/>
  )
}