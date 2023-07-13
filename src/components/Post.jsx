import { Avatar } from './Avatar'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={'https://github.com/mabiiak.png'} />
                    <div className={styles.authorInfo}>
                        <strong>Mabiane polniak</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="21 de junho às 08:20" dateTime='2023-06-21 08:20:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{" "}<a href="">jane.design/doctorcare</a></p>

                <p>
                    {" "}<a>#novoprojeto</a>
                    {" "}<a> #nlw</a>
                    {" "}<a>#rocketseat</a>
                </p>
            </div>
        </article>
    )
}