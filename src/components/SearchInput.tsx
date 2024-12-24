import { ReactComponent as SearchIcon } from '../assets/search-icon.svg';

const SearchInput = () => {
  return (
    <div className="bg-background rounded-[40px] bg-background-alt h-[50px] px-6 text-[#8BA3CB] gap-4 items-center flex">
      <SearchIcon />
      <input
        type="text"
        className="bg-background text-[13px] focus:outline-none "
        placeholder="Search for something"
      />
    </div>
  );
};

export default SearchInput;
