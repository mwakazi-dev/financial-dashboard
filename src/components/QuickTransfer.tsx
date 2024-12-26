import { ReactComponent as SendIcon } from '../assets/icons/send.svg';
import { Button } from './Button';
import Carousel from './Carousel';

const QuickTransfer = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-card aspect-[445/276] rounded-3xl p-[24px] w-full">
      <Carousel slides={[1, 2, 3, 4, 5, 6]} options={{ loop: true }} />
      <div className="flex justify-between items-center mt-[24px] gap-[24px]">
        <p className="text-[#718EBF] text-[16px] leading-[19.36px]">
          Write Amount
        </p>
        <div className="flex items-center gap-[10px] relative">
          <input
            type="number"
            className="flex bg-[#EDF1F7] w-[265px] aspect-[265/50] rounded-[50px] border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#718EBF] placeholder:text-[#718EBF] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            placeholder="525.50"
          />
          <Button className="bg-primary text-card flex  justify-center gap-[10px] absolute right-0 rounded-[50px] w-[125px] h-[50px]">
            Send
            <SendIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
