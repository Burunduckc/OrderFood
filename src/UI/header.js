//UI
import styles from './header.module.css'
export const Header = (props) => {
    return(
        <header className={styles.header}>
            {props.children}
        </header>
    )
}