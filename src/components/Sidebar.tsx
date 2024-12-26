import { NavLink } from 'react-router-dom';

import { SIDE_NAV_ITEMS } from '../data/nav';
import { cn } from '../lib/utils';
import Logo from './Logo';

const Sidebar = () => {
  return (
    <div className="bg-card  col-span-2 mobile:hidden desktop:block border border-l-input border-t-0 border-b-0 border-r-input">
      <div className="flex flex-col items-center pt-[35px]">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="mt-[50px] flex justify-center  flex-col gap-[31px]">
            {SIDE_NAV_ITEMS.map((item) => (
              <li key={item.path} className="">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'relative flex items-center gap-[26px] font-medium text-[18px] before:absolute before:left-[-40px] before:top-1/2 before:w-0 text-muted before:absolute before:left-[-40px] before:top-1/2 before:-translate-y-1/2 before:bg-foreground before:rounded-r-[10px] before:h-[60px] before:transition-all before:duration-300',
                      isActive && 'text-primary before:w-[6px]',
                    )
                  }
                >
                  <div className="flex items-center gap-[24px]">
                    <div>{item.icon}</div>
                    <span className="text-[18px]">{item.label}</span>
                  </div>
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
