import { Link } from 'react-router-dom';

import { ReactComponent as CheckIcon } from '../assets/check.svg';
import classes from '../styles/logo.module.css';

const Logo = () => {
  return (
    <Link to="/" className={classes['logo-container']}>
      <div className="flex items-center gap-x-[10px]">
        <CheckIcon />
        <h1 className="text-[25px] leading-[30.26px] font-sans font-[800]">
          Soar Task
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
