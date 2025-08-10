import styles from './styles.module.css';

interface PerfilProps {
    name: string;
    profession: string;
    profilePicture: string;
    backgroundPicture: string;
}

export default function ProfileCard(props: PerfilProps) {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.fotoFundo} src={props.backgroundPicture} alt="fundo" />
                <img className={styles.fotoPerfil} src={props.profilePicture} alt="foto perfil" />
                <div className={styles.info}>
                    <h1 className={styles.nome}>{props.name}</h1>
                    <p className={styles.profession}>{props.profession}</p>
                </div>
            </div>
        </>
    )
}