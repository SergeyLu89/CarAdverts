import css from './AdvertsList.module.css';
import AdvertsItem from 'components/AdvertsItem/AdvertsItem';

const AdvertsList = ({ adverts }) => {
  return (
    <ul className={css.advertsList}>
      {adverts.map(advert => (
        <AdvertsItem advert={advert} key={advert.id} />
      ))}
    </ul>
  );
};
export default AdvertsList;
