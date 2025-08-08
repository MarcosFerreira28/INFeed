import ProfileCard from "../ProfileCard";
import fotoMarcos from '../../assets/foto_marcos.png';
import Publicacao from "../Publicacao";
import styles from './styles.module.css';

export default function Main() {
    return (
        <main className={styles.main}>
            <ProfileCard name="Marcos Ferreira" profession="Dev Front-end" profilePicture={fotoMarcos} backgroundPicture="https://imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2018/10/03/506414/20181003165936245931i.jpg" />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <Publicacao 
                    nome="Sophia Torres" 
                    cargo="Dentista" 
                    fotoPerfil="https://www.psicologo.com.br/wp-content/uploads/sou-uma-pessoa-boa-ou-nao.jpg" 
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    comentarios={[]}
                    usuarioFoto={fotoMarcos}
                    usuarioNome="Marcos Ferreira"
                />
                <Publicacao 
                    nome="Kleber Rodimildo" 
                    cargo="Engenheiro Civil" 
                    fotoPerfil="https://www.psicologo.com.br/wp-content/uploads/sou-uma-pessoa-boa-ou-nao.jpg" 
                    descricao="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    comentarios={[
                        { nome: 'Felipe Nunes', fotoPerfil: 'https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg', descricao: 'Comentário muito legal e cheio de coisas interessantes', numLikes: 3 },
                    ]}
                    usuarioFoto={fotoMarcos}
                    usuarioNome="Marcos Ferreira"
                />
            </div>
        </main>
    )
}