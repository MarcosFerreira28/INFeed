
import { useState } from 'react';
import styles from './styles.module.css';
import likeimg from '../../assets/like.png';
import likedimg from '../../assets/liked.png';
import deletarimg from '../../assets/trash.png';

interface ComentariosProps {
    nome: string;
    fotoPerfil: string;
    descricao: string;
    numLikes: number;
}

export function Comentarios(props: ComentariosProps) {
    const [likes, setLikes] = useState(props.numLikes);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLikes(likes + 1);
        setLiked(true);
    };

    return (
        <div className={styles.container}>
            <img className={styles.imgPerfil} src={props.fotoPerfil} alt="imagem pessoa" />
            <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '10px' 
                }}>
                <div className={styles.info}>
                    <div>
                        <strong className={styles.nome}>{props.nome}</strong>
                        <p className={styles.tempo}>Cerca de 2h</p>
                    </div>
                    <img className={styles.deletar} src={deletarimg} alt="botao deletar" />
                    <p className={styles.comentario}>{props.descricao}</p>
                </div>
                <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px' 
                    }}>
                    <img id='like-button' src={liked ? likedimg : likeimg} alt="like" className={styles.likeimg} onClick={handleLike} style={{ cursor: 'pointer' }} />
                    <p className={liked ? `${styles.likeqtd} ${styles.likeqtdActive}` : styles.likeqtd} onClick={handleLike} style={{ cursor: 'pointer' }}>Like • {likes}</p>
                </div> 
                {/* colocar para clicar dnv retirar o like */}
            </div>
        </div>
    )
}