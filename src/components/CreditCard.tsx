import { FC } from 'react';

import { ReactComponent as ChipLightIcon } from '../assets/icons/chip_light.svg';
import { ReactComponent as ChipDarkIcon } from '../assets/icons/chip_dark.svg';
import { ReactComponent as MastercardDarkIcon } from '../assets/icons/mastercard_dark.svg';
import { ReactComponent as MastercardLightIcon } from '../assets/icons/mastercard_light.svg';

import { cn, formatAmount } from '../lib/utils';

interface Props {
  balance: number;
  cardNumber: string;
  cardExpiry: string;
  cardHolderName: string;
  variant?: 'light' | 'dark';
}

const CreditCard: FC<Props> = ({
  balance,
  cardNumber,
  cardExpiry,
  cardHolderName,
  variant = 'light',
}) => {
  return (
    <div className="mobile:aspect-[265/170] mobile:w-[265px] desktop:aspect-[350/235] desktop:w-[350px] mobile:rounded-[15px] desktop:rounded-[25px] text-card">
      <div
        className={cn(
          'mobile:py-[17px] mobile:px-[20px] bg-gradient-to-r from-[#5B5A6F] to-[#000000] rounded-t-[15px]',
          variant === 'light' &&
            'bg-card bg-gradient-to-r from-[#ffff] to-[#ffff] border border-input',
        )}
      >
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-[1px] ">
            <h6
              className={cn(
                'mobile:text-[11px] mobile:leading-[13.2px] desktop:text-[12px] mobile:leading-[14.4px] font-lato font-[400] text-card opacity-[70%]',
                variant === 'light' && 'text-[#718EBF]',
              )}
            >
              Balance
            </h6>
            <p
              className={cn(
                'mobile:text-[16px] mobile:leading-[19.2px] desktop:text-[20px] font-lato font-[600]',
                variant === 'light' && 'text-[#343C6A]',
              )}
            >
              {formatAmount(balance)}
            </p>
          </div>
          {variant === 'dark' ? <ChipLightIcon /> : <ChipDarkIcon />}
        </div>
        <div
          className={cn(
            'flex justify-start gap-y-[1.89px] gap-x-[57px]  mobile:mt-[23px]',
          )}
        >
          <div>
            <h6
              className={cn(
                'mobile:text-[10px] mobile:leading-[12px] desktop:text-[12px] font-lato font-[400]  opacity-[70%]',
                variant === 'light' && 'text-[#718EBF]',
              )}
            >
              CARD HOLDER
            </h6>
            <p
              className={cn(
                'mobile:text-[13px] mobile:leading-[15.6px] desktop:text-[15px] font-lato font-[600]  ',
                variant === 'light' && 'text-[#343C6A]',
              )}
            >
              {cardHolderName}
            </p>
          </div>
          <div className="flex flex-col gap-y-[1.89px]">
            <h6
              className={cn(
                'mobile:text-[10px] mobile:leading-[12px] desktop:text-[12px] font-lato font-[400]  opacity-[70%]',
                variant === 'light' && 'text-[#718EBF]',
              )}
            >
              VALID THRU
            </h6>
            <p
              className={cn(
                'mobile:text-[13px] mobile:leading-[15.6px] desktop:text-[15px] font-lato font-[600] ',
                variant === 'light' && 'text-[#343C6A]',
              )}
            >
              {cardExpiry}
            </p>
          </div>
        </div>
      </div>
      <footer
        className={cn(
          'w-full mobile:px-[20px] mobile:h-[51px] desktop:h-[70px] bg-gradient-to-r from-[#5B5A6F] from-[15%] to-[#000000] rounded-b-[15px] flex justify-between items-center ',
          variant === 'light' &&
            'bg-card bg-gradient-to-r from-[#ffff] to-[#ffff] border border-input',
        )}
      >
        <p
          className={cn(
            'mobile:text-[15px] text-card  desktop:text-[22px] font-lato',
            variant === 'light' && 'text-[#343C6A]',
          )}
        >
          {cardNumber.slice(0, 4)} **** **** {cardNumber.slice(12, 16)}
        </p>
        {variant === 'light' ? <MastercardLightIcon /> : <MastercardDarkIcon />}
      </footer>
    </div>
  );
};

export default CreditCard;
