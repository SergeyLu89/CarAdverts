import css from './EmptyImage.module.css';
import { emptyImg } from 'helpers/defaultImg';
const EmptyImage = () => {
  return (
    <div className={css.emptyImageBox}>
      <img className={css.emptyImg} src={emptyImg} alt="empty smile" />
      <p className={css.favoriteDescr}>You don't have any featured ads yet</p>
    </div>
  );
};
export default EmptyImage;
