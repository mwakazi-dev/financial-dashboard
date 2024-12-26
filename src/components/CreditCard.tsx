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
    <div className="mobile:w-[265px] desktop:w-[350px]  desktop:h-[235px] mobile:h-[170px] font-[lato]">
      <div
        className={cn(
          'w-full px-[26px] pt-[24px] pb-[110px]  desktop:pb-[40px] mobile:h-[119px]  desktop:h-[165px]  bg-gradient-to-r from-[#4a495a] to-[#1d1d23] rounded-t-[15px] text-card ',
          variant === 'light' &&
            'bg-card bg-gradient-to-r from-[#ffff] to-[#ffff] border border-input',
        )}
      >
        <div className="flex justify-between">
          <div className="flex flex-col gap-[1px] ">
            <h6
              className={cn(
                'text-[11px]  desktop:text-[12px] leading-[13.2px] font-[400] text-card opacity-[70%]',
                variant === 'light' && 'text-[#718EBF]',
              )}
            >
              Balance
            </h6>
            <p
              className={cn(
                'text-[16px] desktop:text-[20px] leading-[19.2px] font-[600]',
                variant === 'light' && 'text-[#343C6A]',
              )}
            >
              {formatAmount(balance)}
            </p>
          </div>
          {variant === 'dark' ? <ChipLightIcon /> : <ChipDarkIcon />}
        </div>
        <div className="flex justify-between w-[193px] mt-[23px] ">
          <div>
            <h6
              className={cn(
                'text-[10px] desktop:text-[12px] font-[400] leading-[12px] opacity-[70%]',
                variant === 'light' && 'text-[#718EBF]',
              )}
            >
              CARD HOLDER
            </h6>
            <p
              className={cn(
                'text-[13px]  desktop:text-[15px] font-[600] leading-[15.6px] ',
                variant === 'light' && 'text-[#343C6A]',
              )}
            >
              {cardHolderName}
            </p>
          </div>
          <div>
            <h6
              className={cn(
                'text-[10px]  desktop:text-[12px] font-[400] leading-[12px] opacity-[70%]',
                variant === 'light' && 'text-[#718EBF]',
              )}
            >
              VALID THRU
            </h6>
            <p
              className={cn(
                'text-[13px] desktop:text-[15px] font-[600] leading-[15.6px]',
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
          'px-[26px]  w-full mobile:h-[51px] desktop:h-[70px] bg-gradient-to-r from-[#5f5f6d] to-[#27272d] rounded-b-[15px] flex items-center ',
          variant === 'light' &&
            'bg-card bg-gradient-to-r from-[#ffff] to-[#ffff] border border-input',
        )}
      >
        <div className="flex justify-between items-center w-full">
          <p
            className={cn(
              'text-[15px] text-card  desktop:text-[22px] font-[lato]',
              variant === 'light' && 'text-[#343C6A]',
            )}
          >
            {cardNumber.slice(0, 4)} **** **** {cardNumber.slice(12, 16)}
          </p>
          {variant === 'light' ? (
            <MastercardLightIcon />
          ) : (
            <MastercardDarkIcon />
          )}
        </div>
      </footer>
    </div>
  );
};

export default CreditCard;
