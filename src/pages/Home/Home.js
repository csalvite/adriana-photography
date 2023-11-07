import { Header } from '../../components/Header/Header';
import Job from '../../components/Jobs/Job';
import './Home.css';
import { Logout } from '../../components/Logout';

function Home() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Job isHeader={true} />
      </main>
      <Logout />
    </div>
  );
}

export default Home;
