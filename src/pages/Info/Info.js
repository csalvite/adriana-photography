import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import './Info.css';

function Info() {
  return (
    <div className='App'>
      <Header />
      <div className='about-me'>
        <img src='/resources/profile.jpg' alt='profileimage' />
        <div className='text-container'>
          <p>
            Soy una apasionada de la narrativa visual, una contadora de
            historias a través de la lente de mi cámara y la pantalla de mi
            computadora. Mi nombre es Adriana Lago, y mi viaje en el mundo de la
            fotografía y la edición de video ha sido una emocionante búsqueda de
            la belleza y la creatividad en todos los rincones de la vida.
          </p>
          <p>
            Desde que terminé mis estudios en [Nombre de la
            institución/Universidad] con una sólida base técnica y conceptual,
            me he dedicado a explorar el poder de la imagen en movimiento y
            estática. Mi enfoque inicial en la fotografía me permitió
            desarrollar un ojo crítico para la composición, la luz y la emoción
            que puede capturarse en un solo instante. Mis proyectos personales,
            que abarcan desde retratos emocionales hasta paisajes evocadores,
            reflejan mi profundo interés por la diversidad y la singularidad de
            la experiencia humana.
          </p>
          <p>
            La edición de video, por otro lado, me ha proporcionado una
            herramienta adicional para contar historias de manera más dinámica.
            He tenido la oportunidad de trabajar en proyectos que van desde
            documentales cortos hasta videoclips musicales, y cada uno de ellos
            ha sido una oportunidad para experimentar con diferentes estilos
            visuales y técnicas de edición. La postproducción se ha convertido
            en mi lienzo digital, donde puedo mezclar elementos visuales y
            sonoros para crear una experiencia cautivadora.
          </p>
          <p>
            Lo que distingue mi trabajo es mi dedicación a la autenticidad y la
            conexión emocional. Siempre busco capturar la esencia de mis sujetos
            y transmitir su historia de una manera poderosa y genuina. Cada
            proyecto es una oportunidad para aprender y crecer, y estoy
            emocionada por las nuevas aventuras visuales que me depara el
            futuro.
          </p>
          <p>
            Este portfolio es un vistazo a mi viaje hasta ahora. A través de
            estas imágenes y videos, espero que puedas sentir la pasión y el
            compromiso que dedico a mi oficio. Si estás interesado en colaborar
            o simplemente quieres hablar sobre proyectos creativos, ¡estaré
            encantada de conocerte! La fotografía y la edición de video son mi
            forma de dar vida a las historias, y espero que mi trabajo te
            inspire y te invite a explorar el mundo a través de mis ojos.
          </p>
          <p>
            Gracias por visitar mi portfolio, y espero que disfrutes de lo que
            ves tanto como yo disfruté creándolo.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Info;
