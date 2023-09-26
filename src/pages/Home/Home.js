import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import Job from '../../components/Jobs/Job';
import Jobs from '../../components/Jobs/Jobs';
import './Home.css';

function Home() {
  return (
    <div className='App'>
      <Header />
      <Job isHeader={true} />
      <Jobs />
      <Jobs />
      <Jobs />
      <Footer />
    </div>
  );
}

export default Home;
