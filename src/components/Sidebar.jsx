import { PencilLine} from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    let image = "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"

    return (
            <aside className={styles.sidebar}>
                <img className={styles.cover} src={image} />

                <div className={styles.profile}>
                    <Avatar src={'https://github.com/mabiiak.png'} />
                    <strong>Mabi Polniak</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                <a href="#">
                    <PencilLine size={20}/>
                  Editar seu perfil
                </a>
                </footer>
            </aside>
    )
}