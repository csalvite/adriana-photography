import AboutMeCard from '../../components/AboutMe/AboutMeCard';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import './Info.css';

function Info() {
  return (
    <div className='App'>
      <Header />
      <main>
        <div className='about-me'>
          {/* <img src='/resources/profile.jpg' alt='profileimage' /> */}
          <AboutMeCard />
          <div className='text-container'>
            <p>
              Mi nombre es Adriana Lago, soy una apasionada de la narrativa
              visual, mi viaje en el mundo de la fotografía y la edición de
              video ha sido una emocionante búsqueda de la belleza y la
              creatividad en todos los rincones de la vida.
            </p>
            <p>
              Mis estudios en realización audiovisual han fortalecido mi
              capacidad para conceptualizar y crear contenido visual. Cada
              fotografía y video que produzco refleja mi dedicación a la
              excelencia y mi amor por el arte visual.
            </p>
            <p>
              A través de este pequeña web podrás ver parte de mi trabajo tanto
              como fotógrafa como editora y realizadora en vídeos y diversos
              proyectos en los que é participado.
            </p>
            <p>
              Gracias por visitar mi portfolio, y espero que disfrutes de lo que
              ves tanto como yo disfruté creándolo.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Info;
