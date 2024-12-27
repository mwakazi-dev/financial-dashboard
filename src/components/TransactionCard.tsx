import { FC } from 'react';

import { Transaction } from '../types/transaction';
import TransactionItem from './TransactionItem';

interface Props {
  transactions: Transaction[];
}
const TransactionCard: FC<Props> = ({ transactions }) => {
  return (
    <div className="mobile:py-[27px] mobile:px-[18px] flex flex-col items-center gap-y-[10px] rounded-[15px] desktop:w-[350px]  desktop:h-[235px] bg-card  ">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} {...transaction} />
      ))}
    </div>
  );
};

export default TransactionCard;
