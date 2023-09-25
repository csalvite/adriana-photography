import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

const PrincipalJob = () => {
  const { idElement } = useParams();

  return (
    <div className='App'>
      <Header />
      <p>{idElement}</p>
    </div>
  );
};

export default PrincipalJob;
