import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import clsx from 'clsx';
import {
  selectAuthIsLoggedIn,
  selectAuthIsRefreshing,
  selectAuthUser,
} from '../../redux/auth/selectors';
import { apiLogout, apiRefreshUser } from '../../redux/auth/operations';
import {RestrictedRoute} from '../../components/RestrictedRoute/RestrictedRoute';
import RegisterPage from '../../pages/RegistrationPage/RegistrationPage';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';

const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  const user = useSelector(selectAuthUser);

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  const onLogut = () => {
    dispatch(apiLogout());
  }

  if (isRefreshing) return <p>user is refreshing, please wait</p>;

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/"
          >
            Home
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
              <button type='button' onClick={onLogut}>Logout</button>
            </>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/register"
              >
                Register
              </NavLink>
            </>
          )}
        </nav>
      </header>

      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegisterPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
