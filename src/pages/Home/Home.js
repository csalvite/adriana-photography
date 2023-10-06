import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import Job from '../../components/Jobs/Job';
import './Home.css';

function Home() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Job isHeader={true} />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
