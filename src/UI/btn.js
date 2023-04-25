
export const ButtonMeal = (prop) => {
        return <button onClick={prop.onClick} className={prop.btn}>
            {prop.children}
        </button>
}