import { ReactComponent as SearchIcon } from '../assets/search-icon.svg';
import classes from '../styles/SearchInput.module.css';

const SearchInput = () => {
  return (
    <div className="mobile:h-[40px] desktop:h-[50px] rounded-[40px] bg-background flex items-center">
      <div className="mobile:ml-[19px] mobile:mr-[10px] mobile:my-[12px] desktop:ml-[25px] desktop:mr-[15px] desktop:my-[15px]">
        <span className={classes['search-icon-container']}>
          <SearchIcon />
        </span>
      </div>
      <input
        type="text"
        className="mobile:text-[13px] mobile:leading-[15.73px] desktop:text-[15px] desktop:leading-[18.15px] text-[#8BA3CB] placeholder:text-[#8BA3CB] bg-background font-sans focus:outline-none "
        placeholder="Search for something"
      />
    </div>
  );
};

export default SearchInput;
