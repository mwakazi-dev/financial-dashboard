import { useLocation } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from './Avatar';
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
    <nav className="flex justify-between items-center">
      <div className="desktop:hidden tablet:hidden">
        <HamburgerIcon />
      </div>
      <h1 className="text-[20px] desktop:text-[28px] font-[600] desktop:leading-[33.89px]">
        {PageTitle[location.pathname as keyof typeof PageTitle]}
      </h1>
      <div className="flex items-center gap-[30px]">
        <div className=" mobile:hidden desktop:block tablet:block">
          <SearchInput />
        </div>
        <div className="flex gap-[20px] items-center mobile:hidden desktop:flex tablet:flex">
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

        <Avatar>
          <AvatarImage src={UserImage} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};
export default Navbar;
