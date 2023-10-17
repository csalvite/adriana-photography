import './AboutMeCard.css';

const AboutMeCard = () => {
  return (
    <div className='aboutmecard-container'>
      <div className='aboutmeCard'>
        <div className='imgBx'>
          <img src='/resources/profile.jpg' alt='profileImage' />
        </div>
        <div className='aboutContent'>
          <div className='contentBox'>
            <h3>
              Adriana Lago Senande <span>Cinematographer & Photographer</span>
            </h3>
          </div>
          <ul className='sci'>
            <li id='tw'>
              <a href='#'>
                <i class='fa-brands fa-twitter'></i>
              </a>
            </li>
            <li id='ig'>
              <a href='#'>
                <i class='fa-brands fa-instagram'></i>
              </a>
            </li>
            <li id='ln'>
              <a href='#'>
                <i class='fa-brands fa-linkedin'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
