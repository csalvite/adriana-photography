import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import Job from '../../components/Jobs/Job';
import Jobs from '../../components/Jobs/Jobs';
import './Home.css';

function Home() {
  const [images, setImages] = useState([]);

  function importAll(r) {
    return r.keys().map(r);
  }

  useEffect(() => {
    const newImages = [];

    const photoFiles = importAll(
      require.context('../../assets', true, /\.(jpg|jpeg|png|gif|bmp)$/)
    );

    photoFiles.map((photo) =>
      newImages.push({
        original: photo,
        thumbnail: photo,
      })
    );

    setImages(newImages);
  }, []);

  return (
    <div className='App'>
      <Header />
      <Job isHeader={true} />

      <Footer />
    </div>
  );
}

export default Home;
