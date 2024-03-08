import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={css.header}>
      <NavLink
        className={({ isActive }) =>
          ` ${isActive ? css.active : css.headerNavLink}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          ` ${isActive ? css.active : css.headerNavLink}`
        }
        to="/catalog"
      >
        Catalog
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          ` ${isActive ? css.active : css.headerNavLink}`
        }
        to="/favorites"
      >
        Favorites
      </NavLink>
    </nav>
  );
};
export default Header;
