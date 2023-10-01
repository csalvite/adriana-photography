import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion';
import Jobs from '../../components/Jobs/Jobs';

const Pruebas = () => {
  const ZoomInScrollOut = batch(FadeIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className='App'>
      <Header />
      <h1>Pagina para pruebas</h1>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <Jobs />
          </Animator>
          <Animator animation={ZoomInScrollOut}>
            <Jobs />
          </Animator>
          <Animator animation={ZoomInScrollOut}>
            <Jobs />
          </Animator>
          <Animator animation={ZoomInScrollOut}>
            <Jobs />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <Footer />
    </div>
  );
};

export default Pruebas;
