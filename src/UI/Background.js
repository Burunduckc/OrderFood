//UI
import style from './Background.module.css'
export const Background = (prop) => {
    return <div className={style.card}>{prop.children}</div>
}

