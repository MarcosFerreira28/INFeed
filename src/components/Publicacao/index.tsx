import Cabecalho from '../Cabecalho';
import styles from './styles.module.css';

export default function Publicacao() {
    return (
        <div>
            <Cabecalho />
            <p className={styles.descricao}>lorem ipsum <br />
            dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. 
            <br />
            Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!
            </p>
            <div>
                <strong>Deixe seu feedback</strong>
                <textarea name="" id=""></textarea>
                <button>Comentar</button>
            </div>
        </div>
    )
}
