import { useLocation } from 'react-router-dom';

import { ReactComponent as HamburgerIcon } from '../assets/hamburger.svg';
import { PageTitle } from '../types/enums';
import { Button } from './Button';
import { NAV_ITEMS } from '../data/nav';
import UserImage from '../assets/user.jpg';
import SearchInput from './SearchInput';
import classes from '../styles/navbar.module.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center desktop:h-full">
      <div className="desktop:hidden">
        <span className={classes['hamburger-container']}>
          <HamburgerIcon />
        </span>
      </div>
      <h1 className="mobile:text-[20px] mobile:leading-[24.2px] desktop:text-[28px] desktop:leading-[33.89px] text-foreground font-sans font-[600]">
        {PageTitle[location.pathname as keyof typeof PageTitle]}
      </h1>
      <div className="flex items-center gap-x-[30px]">
        <div className="mobile:hidden desktop:block">
          <SearchInput />
        </div>
        <div className="flex items-center gap-x-[30px] mobile:hidden desktop:flex desktop:items-center">
          {NAV_ITEMS.map((item) => (
            <div className={classes['link-btn-container']} key={item.path}>
              <Button
                className="bg-background rounded-full w-[50px] h-[50px]"
                variant="link"
              >
                {item.icon}
              </Button>
            </div>
          ))}
        </div>

        <img
          src={UserImage}
          alt="User Pic"
          className="rounded-full mobile:h-[35px] mobile:w-[35px] desktop:h-[60px] desktop:w-[60px]"
        />
      </div>
    </nav>
  );
};
export default Navbar;
