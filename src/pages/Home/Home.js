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
      <Jobs
        idVideo={1}
        image={'/resources/photos-content/image1.jpg'}
        title={'All Too Well'}
      />
      <Jobs
        idVideo={1}
        image={'/resources/photos-content/image2.jpg'}
        title={'Video Musical'}
      />
      <Jobs
        idVideo={1}
        image={'/resources/photos-content/image3.jpg'}
        title={'Video Musical'}
      />
      <Footer />
    </div>
  );
}

export default Home;
