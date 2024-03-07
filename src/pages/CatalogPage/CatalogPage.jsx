// import css from './CatalogPage.module.css';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../../redux/adverts/advertsAPI';
import {
  selectAdverts,
  // selectAdvertsIsLoadMore,
  selectAdvertsIsLoading,
} from '../../redux/adverts/advertsSelectors';
// import Container from 'components/reuseComponents/Container';

const CatalogPage = () => {
  const dispath = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectAdvertsIsLoading);
  // const loadMore = useSelector(selectAdvertsIsLoadMore);

  useEffect(() => {
    dispath(getAdverts());
  }, [dispath]);

  return (
    // <Container>
    <div>
      {isLoading && <p>LOADING</p>}
      {adverts && <AdvertsList adverts={adverts} />}
      <button>Load more</button>
    </div>
    // </Container>
  );
};
export default CatalogPage;
