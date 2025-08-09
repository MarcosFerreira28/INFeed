import CalculaTempo from '../../functions/CalculaTempo';
import type IPublicacaoProps from '../../InterfacePublicacao/InterfacePublicacao';
import styles from './styles.module.css';

export default function Cabecalho(props: IPublicacaoProps) {
    let tempo = CalculaTempo(props.data);

    return (
        <div className={styles.cabecalho}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img className={styles.imagem} src={props.fotoPerfil} alt="" />
                <div>
                    <h1 className={styles.nome}>{props.nome}</h1>
                    <p className={styles.cargo}>{props.cargo}</p>
                </div>
            </div>
            <p className={styles.tempo}>Publicado há {tempo}</p> {/* colocar data dps */}
        </div>
    )
}