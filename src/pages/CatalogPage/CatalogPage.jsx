// import css from './CatalogPage.module.css';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../../redux/adverts/advertsAPI';
import {
  selectAdverts,
  // selectAdvertsIsLoadMore,
  selectAdvertsIsLoading,
} from '../../redux/adverts/advertsSelectors';
import Container from 'components/reuseComponents/Container/Container';

const CatalogPage = () => {
  const dispath = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectAdvertsIsLoading);
  // const loadMore = useSelector(selectAdvertsIsLoadMore);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispath(getAdverts(currentPage));
  }, [dispath, currentPage]);

  const onLoadMoreBtn = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <Container>
      <div>
        {adverts && <AdvertsList adverts={adverts} />}
        <button onClick={onLoadMoreBtn}>Load more</button>
      </div>
    </Container>
  );
};
export default CatalogPage;
