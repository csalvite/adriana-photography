import { useContext } from 'react';
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
    </div>
  );
}

export default Home;
