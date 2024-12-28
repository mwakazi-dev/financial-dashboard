import { FC } from 'react';

import { Icon } from '../constants/icons';
import { Transaction } from '../types/transaction';
import { cn } from '../lib/utils';
import withLoading from '../hoc/withLoading';

interface Props {
  transactions: Transaction[];
}
const TransactionList: FC<Props> = ({ transactions }) => {
  return (
    <ul className="bg-card aspect-[350px] h-[235px] rounded-[25px] desktop:p-6 space-y-2.5 overflow-y-auto">
      {transactions.map((transaction) => (
        <li
          className="flex gap-4 items-center justify-between"
          key={transaction.id}
        >
          <div className="flex gap-4 items-center">
            <div
              className={cn(
                'size-[55px] flex items-center justify-center rounded-full',
                transaction.category === 'card' &&
                  'text-[#FFBB38] bg-[#FFF5D9]',
                transaction.category === 'paypal' &&
                  'text-[#396AFF] bg-[#E7EDFF]',
                transaction.category === 'cash' &&
                  'text-[#16DBCC] bg-[#DCFAF8]',
              )}
            >
              {Icon[transaction.category]}
            </div>

            <div>
              <p className="text-foreground font-medium text-sm desktop:text-md">
                {transaction.title}
              </p>
              <p className="text-secondary text-sm desktop:text-md">
                {transaction.createdAt}
              </p>
            </div>
          </div>

          <p
            className={cn(
              'font-medium text-sm desktop:text-md',
              transaction.type === 'EXPENSE'
                ? 'text-[#FF4B4A]'
                : 'text-[#41D4A8]',
            )}
          >
            {transaction.type === 'EXPENSE' ? '-' : '+'}
            {transaction.amount}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default withLoading(TransactionList);
