import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import SearchInput from '../components/SearchInput';
import Sidebar from '../components/Sidebar';

const RootLayout: FC = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className="mobile:col-span-12 desktop:col-span-10 ">
        <header className="col-span-12 bg-card centered mobile:py-[25px] mobile:h-[140px] desktop:h-[100px]">
          <Navbar />
          <div className="my-[20px]  desktop:hidden tablet:hidden">
            <SearchInput />
          </div>
        </header>
        <main className="pt-[24px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
