import { FC } from 'react';
import { ReactComponent as SendIcon } from '../assets/icons/send.svg';
import { Button } from './Button';
import Carousel from './Carousel';

interface Props {
  users: any[];
}

const QuickTransfer: FC<Props> = ({ users }) => {
  return (
    <div className="flex flex-col justify-between bg-card aspect-[445/276] rounded-3xl">
      <Carousel slides={users} options={{ loop: true }} />
      <div className="flex justify-between items-center mobile:gap-x-[25px] mobile:mt-[22px]">
        <p className="mobile:text-[12px] mobile:leading-[14.52px] text-[#718EBF]  desktop:leading-[19.36px] font-sans font-[400]">
          Write Amount
        </p>
        <div className="flex items-center gap-[10px] relative">
          <input
            type="number"
            className="flex bg-[#EDF1F7] w-[265px] mobile:aspect-[187/40] mobile:w-[187px] rounded-[50px] border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#718EBF] placeholder:text-[#718EBF] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm placeholder:text-[12px]"
            placeholder="525.50"
          />
          <Button className="bg-primary text-card flex justify-center gap-[10px] absolute right-0 rounded-[50px] mobile:aspect-[100/40] mobile:w-[100px] ">
            Send
            <SendIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
