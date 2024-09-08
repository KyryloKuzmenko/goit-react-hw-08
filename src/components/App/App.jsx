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
import { RestrictedRoute } from '../../components/RestrictedRoute/RestrictedRoute';
import RegisterPage from '../../pages/RegistrationPage/RegistrationPage';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import Layout from '../Layout/Layout';

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

  if (isRefreshing) return <p>user is refreshing, please wait</p>;

  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
