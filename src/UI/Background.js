//UI
import style from './Background.module.css'
//Component
export const Background = (prop) => {
    return <div className={style.card}>{prop.children}</div>
}

