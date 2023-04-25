
export const ButtonMeal = (prop) => {
        return <button onClick={prop.onAdd} className={prop.btn}>
            {prop.children}
        </button>
}