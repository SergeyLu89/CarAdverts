import css from './FilterForm.module.css';
import { BRANDS } from 'helpers/constants';
import { ReactComponent as DownSvg } from '../../icons/down.svg';
import { useState } from 'react';

const FilterForm = ({ onSubmit }) => {
  const [selectFocus, setSelectFocus] = useState(null);

  const onFormSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const brand = formData.get('brand');
    onSubmit(brand);
  };
  return (
    <form className={css.filerForm} onSubmit={onFormSubmit}>
      <div className={css.selectBox}>
        <label className={css.formLabel} htmlFor="brand">
          Car brand
        </label>
        <select
          className={css.formSelect}
          name="brand"
          id="brand"
          onFocus={() => {
            setSelectFocus(true);
          }}
          onBlur={() => {
            setSelectFocus(false);
          }}
        >
          <option value="">Select brand</option>
          {BRANDS.map(brand => (
            <option value={brand} key={brand}>
              {brand}
            </option>
          ))}
        </select>
        {selectFocus ? (
          <DownSvg className={css.downSvgFocus} />
        ) : (
          <DownSvg className={css.downSvg} />
        )}
      </div>
      <button type="submit" className={css.formBtn}>
        Search
      </button>
    </form>
  );
};

export default FilterForm;
