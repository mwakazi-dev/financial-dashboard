import { ReactComponent as CheckIcon } from '../assets/check.svg';
import classes from '../styles/Logo.module.css';

const Logo = () => {
  return (
    <div className={classes['logo-container']}>
      <div className="flex items-center gap-[10px]">
        <CheckIcon />
        <h1 className="text-[25px] text-foreground font-[800] leading-[30.26px]">
          Soar Task
        </h1>
      </div>
    </div>
  );
};

export default Logo;
