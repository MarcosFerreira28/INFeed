import style from './styles.module.css'
import logoIN from '../../assets/Logo_1.svg'

export default function App() {
    return (
        <div className={style.container}>
            <img src={logoIN} alt="Logo" />
            <p className={style.feed}>Feed</p>
        </div>
    )
}