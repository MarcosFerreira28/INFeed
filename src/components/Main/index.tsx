import ProfileCard from "../ProfileCard";
import fotoMarcos from '../../assets/foto_marcos.png';
import Publicacao from "../Publicacao";
import styles from './styles.module.css';

export default function Main() {
    return (
        <main className={styles.main}>
            <ProfileCard name="Marcos Ferreira" profession="Dev Front-end" profilePicture={fotoMarcos} backgroundPicture="https://imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2018/10/03/506414/20181003165936245931i.jpg" />
            <Publicacao nome="Sophia torres" cargo="Dentista" fotoPerfil="https://www.psicologo.com.br/wp-content/uploads/sou-uma-pessoa-boa-ou-nao.jpg" />

        </main>
    )
}