import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import { Children } from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={'...loading'}>{children}</Suspense>
    </div>
  );
};

export default Layout;
