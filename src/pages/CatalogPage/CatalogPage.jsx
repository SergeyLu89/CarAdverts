import css from './CatalogPage.module.css';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../../redux/adverts/advertsAPI';
import { selectAdvertsIsLoading } from '../../redux/adverts/advertsSelectors';
import FilterForm from 'components/FilterForm/FilterForm';

const CatalogPage = () => {
  const dispath = useDispatch();
  const isLoading = useSelector(selectAdvertsIsLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentAdverts, setCurrentAdverts] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [selectBrand, setSelectBrand] = useState('');

  useEffect(() => {
    const fetchAdverts = async () => {
      const queryParams = new URLSearchParams({ page: currentPage, limit: 12 });
      if (selectBrand) {
        const [brand] = selectBrand.split('/');
        queryParams.append('make', brand);
      }
      const adverts = await dispath(getAdverts(queryParams)).unwrap();
      if (adverts.length < 12) {
        setLoadMore(false);
      }
      setCurrentAdverts(prevState => [...prevState, ...adverts]);
    };
    fetchAdverts();
  }, [dispath, currentPage, selectBrand]);

  const onLoadMoreBtn = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const onFormSubmit = brand => {
    setSelectBrand(`${brand}/${Date.now()}`);
    setCurrentPage(1);
    setCurrentAdverts([]);
    setLoadMore(true);
  };

  return (
    <div>
      <FilterForm onSubmit={onFormSubmit} />
      {currentAdverts.length !== 0 && <AdvertsList adverts={currentAdverts} />}
      {isLoading && <p>Loading...</p>}
      {!isLoading && loadMore && (
        <button onClick={onLoadMoreBtn} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
    </div>
  );
};
export default CatalogPage;
