import { useContext } from 'react';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import Job from '../../components/Jobs/Job';
import './Home.css';
import { PhotosContext } from '../../context/PhotosContext';

function Home() {
  const { images, error, loading } = useContext(PhotosContext);

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
