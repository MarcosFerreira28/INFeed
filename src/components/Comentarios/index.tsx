import { useState } from 'react';
import styles from './styles.module.css';
import likeimg from '../../assets/like.png';
import likedimg from '../../assets/liked.png';
import deletarimg from '../../assets/trash.png';

export interface ComentariosProps {
    nome: string;
    fotoPerfil: string;
    descricao: string;
    numLikes: number;
    deletarComentario?: () => void;
}

export function Comentarios({ nome, fotoPerfil, descricao, numLikes, deletarComentario }: ComentariosProps) {
    const [likes, setLikes] = useState(numLikes);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (liked) {
            setLikes(likes - 1);
            setLiked(false);
        }else {
            setLikes(likes + 1);
            setLiked(true);
        }
    };

    return (
        <div className={styles.container}>
            <img className={styles.imgPerfil} src={fotoPerfil} alt="imagem pessoa" />
            <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '10px' 
                }}>
                <div className={styles.info}>
                    <div>
                        <strong className={styles.nome}>{nome}</strong>
                        <p className={styles.tempo}>Cerca de 2h</p>
                    </div>
                    <img className={styles.deletar} src={deletarimg} alt="botao deletar" onClick={deletarComentario} />
                    <p className={styles.comentario}>{descricao}</p>
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