import Header from "./components/Header/Header";
import ProfileCard from "./components/ProfileCard";
import fotoMarcos from './assets/foto_marcos.png';

export default function App() {

  return (
    <>
      <Header />
      <ProfileCard name="Marcos Ferreira" profession="Dev Front-end" profilePicture={fotoMarcos} backgroundPicture="https://imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2018/10/03/506414/20181003165936245931i.jpg" />
    </>
  )
}

