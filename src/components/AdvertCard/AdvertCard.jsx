import { defaultImg } from 'helpers/defaultImg';
import css from './AdvertCard.module.css';
import { formatingMile } from 'helpers/formatingMile';
const AdvertCard = ({ advert }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = advert;
  const carAdress = address.split(',');
  const carCity = carAdress[carAdress.length - 2];
  const carCountry = carAdress[carAdress.length - 1];
  return (
    <div>
      <img
        src={img ? img : defaultImg}
        alt={`${make} ${model}`}
        className={css.cardImg}
      />
      <div className={css.cardInfoBox}>
        <h2>
          {make} <span className={css.cardSubtitleAccent}>{model}</span>, {year}
        </h2>
        <div className={css.cardDescrBox}>
          <p>{carCity}</p>|<p>{carCountry}</p>|<p>Id:{id}</p>|<p>Year:{year}</p>
          |<p>Type:{type}</p>|<p>Fuel Consumption:{fuelConsumption}</p>|
          <p>Engine Size:{engineSize}</p>
        </div>
      </div>
      <p className={css.carDescr}>{description}</p>
      <div className={css.accessBox}>
        <h3 className={css.accessBoxTitle}>Accessories and functionalities:</h3>
        <div className={css.accessList}>
          {accessories.map((accessory, index) => (
            <p key={index}>
              {accessory}
              <span>|</span>
            </p>
          ))}
          {functionalities?.map((functional, index) => (
            <p key={index}>
              {functional}
              <span>|</span>
            </p>
          ))}
        </div>
      </div>
      <div>
        <h3 className={css.accessBoxTitle}>Rental Conditions:</h3>
        <div className={css.rentalBox}>
          {rentalConditions.split('\n').map((condition, index) =>
            index === 0 ? (
              <p key={index} className={css.rentalBoxiteItem}>
                {condition.split(' ')[0]} {condition.split(' ')[1]}{' '}
                <span className={css.rentalBoxAccent}>
                  {condition.split(' ')[2]}
                </span>
              </p>
            ) : (
              <p key={index} className={css.rentalBoxiteItem}>
                {condition}
              </p>
            )
          )}
          <p className={css.rentalBoxiteItem}>
            Mileage:{' '}
            <span className={css.rentalBoxAccent}>
              {formatingMile(mileage)}
            </span>
          </p>
          <p className={css.rentalBoxiteItem}>
            Price:{' '}
            <span className={css.rentalBoxAccent}>
              {rentalPrice.slice(1) + rentalPrice[0]}
            </span>
          </p>
        </div>
      </div>
      <a className={css.rentalBtn} href="tel:++380730000000">
        Rental car
      </a>
    </div>
  );
};
export default AdvertCard;
