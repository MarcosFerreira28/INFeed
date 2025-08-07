import style from './styles.module.css'

export default function App() {
    return (
        <div className={style.container}>
            <img src="./logo.svg" alt="Logo" />
            <p className={style.feed}>Feed</p>
        </div>
    )
}