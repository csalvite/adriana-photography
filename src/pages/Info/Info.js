import { Header } from '../../components/Header/Header';
import './Info.css';

function Info() {
  return (
    <div className='App'>
      <Header />
      <div className='about-me'>
        <img src='/resources/profile.jpg' alt='profileimage' />
        <p>
          Rina is a director of photography based in London. She grew up in a
          small city in Japan, where she studied still life and portrait
          painting. She is the first Asian woman ever to join the British
          Society of Cinematographers, and she was selected for the BAFTA
          Breakthrough 2020. She is also the first female DOP ever to win a
          cinematography award at the British Arrows, as well as being nominated
          for a best cinematographer in fiction at the BAFTA Cymru Awards 19',
          making history in both commercials and narrative categories.
        </p>
        <p> → LATEST CREDITS/AWARDS </p>
        <p>
          Recent projects: ‘O’dessa’ for Searchlight Pictures, ‘Flint Strong’
          for MGM studios, EUPHORIA season2 ep6 for HBO/A24, 'NANNY' (Sundance
          Grand Jury Prize) for Amazon Studios, Top Boy3 for Netflix, 'Sitting
          In Limbo' (BAFTA winner) for BBC1.
        </p>
      </div>
    </div>
  );
}

export default Info;
