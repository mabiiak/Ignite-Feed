import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar src={'https://github.com/mabiiak.png'} hasBorder={false} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mabi Polniak</strong>
                            <time title="21 de junho às 08:20" dateTime='2023-06-21 08:20:00'>Cerca de 1h</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom, parabéns meu amigo</p>
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