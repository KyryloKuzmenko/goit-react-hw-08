import { NavLink } from 'react-router-dom';
import { selectAuthIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import css from "./Navigation.module.css"

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

    return (
      <nav className={css.nav}>
        <NavLink
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
          to="/"
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/contacts"
          >
            Contacts
          </NavLink>
        )}
      </nav>
    );
};

export default Navigation;
