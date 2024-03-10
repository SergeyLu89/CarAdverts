import css from './AdvertsItem.module.css';
import { ReactComponent as FavoriteSvg } from '../../icons/favorite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesAdverts } from '../../redux/favoritesAdverts/favoritesAdvertsSelectors';
import {
  addFavoriteAdvert,
  removeFavoriteAdvert,
} from '../../redux/favoritesAdverts/favoritesAdvertsReducer';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import AdvertCard from '../AdvertCard/AdvertCard';
import { defaultImg } from 'helpers/defaultImg';

const AdvertsItem = ({ advert }) => {
  const dispatch = useDispatch();
  const favoritesAdverts = useSelector(selectFavoritesAdverts);
  const isFavorite = favoritesAdverts?.some(
    favoriteAdvert => favoriteAdvert.id === advert.id
  );

  const onFavoriteToggle = () => {
    dispatch(
      isFavorite ? removeFavoriteAdvert(advert) : addFavoriteAdvert(advert)
    );
  };
  const {
    img,
    year,
    make,
    model,
    type,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = advert;

  const carAdress = address.split(',');
  const carCity = carAdress[carAdress.length - 2];
  const carCountry = carAdress[carAdress.length - 1];

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li className={css.listItem}>
        <button
          type="button"
          className={css.favoriteBtn}
          onClick={onFavoriteToggle}
        >
          <FavoriteSvg
            fill={isFavorite ? 'rgba(52, 112, 255, 1)' : 'transparent'}
            stroke={isFavorite ? 'rgba(52, 112, 255, 1)' : 'white'}
          />
        </button>
        <img
          src={img ? img : defaultImg}
          alt={`${make} ${model}`}
          className={css.listItemImg}
        />
        <div className={css.infoBox}>
          <div className={css.subTitleBox}>
            <p className={css.subtitle}>
              {make} <span className={css.subTitleBoxAccent}>{model}</span>,{' '}
              {year}
            </p>
            <p>{rentalPrice}</p>
          </div>
          <div className={css.descrBox}>
            <p>{carCity}</p>|<p>{carCountry}</p>|<p>{rentalCompany}</p>|
            <p>Premium </p>|<p>{type}</p>|<p>{model}</p>|<p>{mileage}</p>|
            <p>{accessories[0]}</p>
          </div>
        </div>
        <button className={css.learnmoreBtn} onClick={openModal}>
          Learn more
        </button>
      </li>
      {isOpen && (
        <Modal isOpen={isOpen} closeFnc={closeModal}>
          <AdvertCard advert={advert} />
        </Modal>
      )}
    </>
  );
};
export default AdvertsItem;
