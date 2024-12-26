import { NavLink } from 'react-router-dom';

import { SIDE_NAV_ITEMS } from '../data/nav';
import { cn } from '../lib/utils';
import Logo from './Logo';

const Sidebar = () => {
  return (
    <div className="bg-card col-span-2 mobile:hidden desktop:block border-r-input ">
      <div className="flex flex-col gap-y-[30px] items-center">
        <Logo />
        <nav>
          <ul className="flex justify-center flex-col gap-[31px]">
            {SIDE_NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'relative flex items-center gap-x-[26px] gap-y-[26px] text-[18px] leading-[21.78px] before:absolute before:left-[-40px] before:top-1/2 before:w-0 text-muted before:absolute before:left-[-40px] before:top-1/2 before:-translate-y-1/2 before:bg-foreground before:rounded-r-[10px] before:h-[60px] before:transition-all before:duration-300 font-sans font-[500]',
                      isActive && 'text-primary before:w-[6px] n:text-primary',
                    )
                  }
                >
                  {item.icon}
                  <span className="text-[18px]">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
