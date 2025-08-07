import styles from './styles.module.css';
import likeimg from '../../assets/like.png';
import deletarimg from '../../assets/trash.png';

export function Comentarios() {
    return (
        <div className={styles.container}>
            <img className={styles.imgPerfil} src="https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg" alt="imagem pessoa" />
            <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '10px' 
                }}>
                <div className={styles.info}>
                    <div>
                        <strong className={styles.nome}>Felipe Nunes</strong>
                        <p className={styles.tempo}>Cerca de 2h</p>
                    </div>
                    <img className={styles.deletar} src={deletarimg} alt="botao deletar" />
                    <p className={styles.comentario}>Est aspernatur quis eos natus dicta et internos</p>
                </div>
                <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px' 
                    }}>
                    <img src={likeimg} alt="like" className={styles.likeimg} />
                    <p className={styles.likeqtd}>Like • 7</p>
                </div>
            </div>
        </div>
    )
}