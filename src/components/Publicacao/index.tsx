import type IPublicacaoProps from '../../InterfacePublicacao/InterfacePublicacao';
import Cabecalho from '../Cabecalho';
import { Comentarios } from '../Comentarios';
import styles from './styles.module.css';

export default function Publicacao(props: IPublicacaoProps) {
    return (
        <div className={styles.publicacao}>
            <Cabecalho nome={props.nome} cargo={props.cargo} fotoPerfil={props.fotoPerfil} />

            <p className={styles.descricao}>lorem ipsum <br /><br />
            dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. 
            <br /><br />
            Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!
            </p>

            <div className={styles.feedbackContainer}>
                <strong className={styles.feedbackTitle}>Deixe seu feedback</strong>
                <textarea name="" className={styles.feedbackText} placeholder='Insira o seu feedback'></textarea>
                <button className={styles.button}>Comentar</button>
            </div>

            <Comentarios />
            
        </div>
    )
}
