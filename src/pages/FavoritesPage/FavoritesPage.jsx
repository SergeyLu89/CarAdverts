import css from './FavoritesPage.module.css';
import { useSelector } from 'react-redux';
import { selectFavoritesAdverts } from '../../redux/favoritesAdverts/favoritesAdvertsSelectors';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import Container from 'components/reuseComponents/Container/Container';
import EmptyImage from 'components/EmptyImage/EmptyImage';

const FavoritePage = () => {
  const faviriteAdverts = useSelector(selectFavoritesAdverts);

  return (
    <Container>
      <h2 className={css.favoriteTitile}>Favorites adverts</h2>
      {faviriteAdverts && faviriteAdverts.length === 0 ? (
        <EmptyImage />
      ) : (
        <AdvertsList adverts={faviriteAdverts} />
      )}
    </Container>
  );
};
export default FavoritePage;
