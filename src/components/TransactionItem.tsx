import { FC } from 'react';

import { Button } from './Button';
import { cn, formatAmount } from '../lib/utils';
import { Icon } from '../constants/icons';
import classes from '../styles/TransactionItem.module.css';

interface Props {
  icon: string;
  transactionDate: string;
  transactionAmount: number;
  transactionName: string;
}

const TransactionItem: FC<Props> = ({
  icon,
  transactionDate,
  transactionAmount,
  transactionName,
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between w-[301px] h-[55px] gap-[10px]',
      )}
    >
      <div className={classes['btn-container']}>
        <Button
          className={cn(
            'h-[55px] w-[55px] link rounded-full',
            icon === 'card' && 'bg-[#FFF5D9]',
            icon === 'paypal' && 'bg-[#E7EDFF]',
            icon === 'dollar' && 'bg-[#DCFAF8]',
          )}
          variant="link"
        >
          {Icon[icon as keyof typeof Icon]}
        </Button>
      </div>
      <div>
        <h4 className="mobile:text-[14px] desktop:text-[16px] leading-[16.94px] text-card-foreground">
          {transactionName}
        </h4>
        <p className="mobile:text-[12px] desktop:text-[15px] text-secondary">
          {transactionDate}
        </p>
      </div>
      <div
        className={cn(
          'mobile:text-[11px] desktop:text-[16px] leading-[13.31px] font-[500] ',
          icon === 'card' && 'text-destructive',
          (icon === 'paypal' || icon === 'dollar') && 'text-[#41D4A8]',
        )}
      >
        {icon === 'card' ? '-' : '+'}
        {formatAmount(transactionAmount)}
      </div>
    </div>
  );
};

export default TransactionItem;
