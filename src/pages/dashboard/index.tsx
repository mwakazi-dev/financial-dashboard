import { Link } from 'react-router-dom';

import CreditCard from '../../components/CreditCard';
import TransactionCard from '../../components/TransactionCard';

const DashboardPage = () => {
  const transactions = [
    {
      id: '1',
      icon: 'card',
      transactionDate: 'January 12, 2022',
      transactionAmount: 1234.56,
      transactionName: 'Eating out',
    },
    {
      id: '2',
      icon: 'paypal',
      transactionDate: 'January 12, 2022',
      transactionAmount: 1234.56,
      transactionName: 'Eating out',
    },
    {
      id: '3',
      icon: 'dollar',
      transactionDate: 'January 12, 2022',
      transactionAmount: 1234.56,
      transactionName: 'Eating out',
    },
  ];
  return (
    <div className="centered bg-card desktop:bg-background w-full h-screen">
      <div className="grid grid-cols-12 mobile:gap-y-[48px] desktop:gap-[30px] w-full  pt-[24px] ">
        <div className=" mobile:col-span-12 desktop:col-span-8 ">
          <div className="flex justify-between items-center">
            <h3 className="text-[16px] font-[600] leading-[19.36px]">
              My Cards
            </h3>
            <Link
              to="/my-cards"
              className="text-[14px] font-[600] leading-[16.94px]"
            >
              See All
            </Link>
          </div>
          <div className=" flex gap-[30px] overflow-x-auto overflow-y-hidden scrollbar-hide h-full">
            {[1, 2].map((item, index) => (
              <div key={item} className="mt-[24px] ">
                <CreditCard
                  cardNumber="4567890123456789"
                  cardHolderName="John Doe"
                  cardExpiry="05/25"
                  balance={12345.67}
                  variant={index === 0 ? 'dark' : 'light'}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[24px] mobile:col-span-12 h-full desktop:col-span-4 h-[300px]">
          <div className="flex justify-between items-center">
            <h3 className="text-[16px] font-[600] leading-[19.36px]">
              Recent Transaction
            </h3>
          </div>
          <div className="items-center overflow-x-hidden overflow-y-auto scrollbar-hide h-full">
            <TransactionCard transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
