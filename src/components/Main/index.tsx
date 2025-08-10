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
                    nome="Kaio Jorge" 
                    cargo="Jogador de Futebol" 
                    fotoPerfil="https://santaportal.com.br/wp/wp-content/uploads/2025/08/kaio-jorge.jpg" 
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    comentarios={[]}
                    usuarioFoto={fotoMarcos}
                    usuarioNome="Marcos Ferreira"
                    data="2025-08-09T08:00:00"
                />
                <Publicacao 
                    nome="Kleber Rodimildo" 
                    cargo="Engenheiro Civil" 
                    fotoPerfil="https://www.psicologo.com.br/wp-content/uploads/sou-uma-pessoa-boa-ou-nao.jpg" 
                    descricao="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    comentarios={[
                        { nome: 'Felipe Nunes', fotoPerfil: 'https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg', descricao: 'Comentário muito legal e cheio de coisas interessantes', numLikes: 3, data: "2025-08-09T09:00:00" },
                        { nome: 'Ana Clara', fotoPerfil: 'https://static.vecteezy.com/ti/fotos-gratis/p2/3491968-imagem-retrato-de-mulher-linda-encantadora-close-up-gratis-foto.jpg', descricao: 'Gostei bastante do que você escreveu!', numLikes: 1, data: "2025-08-09T21:30:00" }
                    ]}
                    usuarioFoto={fotoMarcos}
                    usuarioNome="Marcos Ferreira"
                    data="2025-08-07T15:00:00"
                />
            </div>
        </main>
    )
}