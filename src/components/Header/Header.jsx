import { NavLink } from 'react-router-dom';

// import css from './Header.module.css';
const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </div>
  );
};
export default Header;
