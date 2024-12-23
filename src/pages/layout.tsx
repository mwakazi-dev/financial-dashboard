import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout: FC = () => {
  return (
    <>
      <header>
        <nav>
          <a href="/">Navigation</a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>© 2024 Soar</footer>
    </>
  );
};

export default RootLayout;
