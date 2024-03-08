import css from './FavoritesPage.module.css';
import { useSelector } from 'react-redux';
import { selectFavoritesAdverts } from '../../redux/favoritesAdverts/favoritesAdvertsSelectors';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import Container from 'components/reuseComponents/Container/Container';

// import css from './FavoritesPage.module.css';
const FavoritePage = () => {
  const faviriteAdverts = useSelector(selectFavoritesAdverts);

  return (
    <Container>
      <h2 className={css.favoriteTitile}>Favorite adverts</h2>
      {faviriteAdverts && faviriteAdverts.length === 0 ? (
        <p className={css.favoriteDescr}>You don't have any featured ads yet</p>
      ) : (
        <AdvertsList adverts={faviriteAdverts} />
      )}
    </Container>
  );
};
export default FavoritePage;
