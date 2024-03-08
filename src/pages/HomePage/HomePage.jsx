import css from './HomePage.module.css';
import { heroImg } from 'helpers/defaultImg';
import Container from 'components/reuseComponents/Container/Container';

const HomePage = () => {
  return (
    <Container>
      <h1 className={css.mainTitle}>
        Welcome to the <span>car rental</span> app
      </h1>
      <div className={css.heroSection}>
        <img src={heroImg} alt="road" className={css.heroImg} />
        <div className={css.heroDescrBox}>
          <p className={css.heroPageDrscr}>
            This is a convenient service for selecting cars for rent. With us,
            your travels will become even brighter.
          </p>
          <h3>We offer:</h3>
          <ul className={css.heroDescrlist}>
            <li>
              <p>Quality car servicing</p>
            </li>
            <li>
              <p>Affordable prices</p>
            </li>
            <li>
              <p>Help in choosing a car</p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
export default HomePage;
