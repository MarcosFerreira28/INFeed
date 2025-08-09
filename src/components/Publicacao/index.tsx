import type IPublicacaoProps from "../../InterfacePublicacao/InterfacePublicacao";
import styles from './styles.module.css';
import Cabecalho from '../Cabecalho';
import { Comentarios, type ComentariosProps } from '../Comentarios';
import { useState } from 'react';

interface PublicacaoProps extends IPublicacaoProps {
    descricao: string;
    comentarios?: ComentariosProps[];
    usuarioNome: string;
    usuarioFoto: string;
}

export default function Publicacao(props: PublicacaoProps) {
    const [comentarios, setComentarios] = useState<ComentariosProps[]>(props.comentarios || []);
    const [novoComentario, setNovoComentario] = useState("");

    const adicionaComentario = () => {
        if(novoComentario.trim() === ""){
            alert("O comentário não pode estar vazio.");
            return;
        }
        setComentarios(comentarios.concat(
            {
                nome: props.usuarioNome,
                fotoPerfil: props.usuarioFoto,
                descricao: novoComentario,
                numLikes: 0
            }
        ));
        setNovoComentario("");
    };

    return (
        <div className={styles.publicacao}>
            <Cabecalho nome={props.nome} cargo={props.cargo} fotoPerfil={props.fotoPerfil} />

            <p className={styles.descricao}>{props.descricao}</p>

            <div className={styles.feedbackContainer}>
                <strong className={styles.feedbackTitle}>Deixe seu feedback</strong>
                <textarea
                    className={styles.feedbackText}
                    placeholder='Insira o seu feedback'
                    value={novoComentario}
                    onChange={e => setNovoComentario(e.target.value)}
                ></textarea>
                <button className={styles.button} onClick={adicionaComentario}>Comentar</button>
            </div>

            {comentarios.length > 0 && (
                comentarios.map((comentario, i) => (
                    <Comentarios
                        key={i}
                        nome={comentario.nome}
                        fotoPerfil={comentario.fotoPerfil}
                        descricao={comentario.descricao}
                        numLikes={comentario.numLikes}
                        deletarComentario={() => {
                            setComentarios(comentarios.filter((_, indice) => indice !== i)); //filtra colocando todos comentarios e só tira o que tem o indice = i
                        }}
                    />
                ))
            )}
        </div>
    )
}
