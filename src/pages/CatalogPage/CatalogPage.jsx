import css from './CatalogPage.module.css';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../../redux/adverts/advertsAPI';
import { selectAdvertsIsLoading } from '../../redux/adverts/advertsSelectors';

const CatalogPage = () => {
  const dispath = useDispatch();

  const isLoading = useSelector(selectAdvertsIsLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentAdverts, setCurrentAdverts] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    const fetchAdverts = async () => {
      // const queryParams = new URLSearchParams({ page: currentPage, limit: 12 });
      const adverts = await dispath(getAdverts(currentPage)).unwrap();
      if (adverts.length < 12) {
        setLoadMore(false);
      }
      setCurrentAdverts(prevState => [...prevState, ...adverts]);
    };
    fetchAdverts();
  }, [dispath, currentPage]);

  const onLoadMoreBtn = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      {currentAdverts.length !== 0 && <AdvertsList adverts={currentAdverts} />}
      {isLoading && <p>Loading...</p>}
      {loadMore && (
        <button onClick={onLoadMoreBtn} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
    </div>
  );
};
export default CatalogPage;
