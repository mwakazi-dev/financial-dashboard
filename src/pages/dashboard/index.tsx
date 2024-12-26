import { Link } from 'react-router-dom';

import CreditCard from '../../components/CreditCard';
import TransactionCard from '../../components/TransactionCard';
import WeeklyActivityChart from '../../components/WeeklyActivityChart';
import ExpenseStatistics from '../../components/ExpenseStatistics';
import QuickTransfer from '../../components/QuickTransfer';
import BalanceHistoryChart from '../../components/BalanceHistoryChart';

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

  const MOCK_WEEKLY_ACTIVITY = [
    { day: 'Sat', withdraw: 450, deposit: 220 },
    { day: 'Sun', withdraw: 320, deposit: 120 },
    { day: 'Mon', withdraw: 300, deposit: 250 },
    { day: 'Tue', withdraw: 450, deposit: 350 },
    { day: 'Wed', withdraw: 150, deposit: 220 },
    { day: 'Thu', withdraw: 400, deposit: 230 },
    { day: 'Fri', withdraw: 380, deposit: 320 },
  ];

  const expenses = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const history = [
    { month: 'Jul', balance: 150 },
    { month: 'Aug', balance: 315 },
    { month: 'Sep', balance: 450 },
    { month: 'Oct', balance: 750 },
    { month: 'Nov', balance: 250 },
    { month: 'Dec', balance: 550 },
    { month: 'Jan', balance: 650 },
  ];

  return (
    <div className="centered bg-card desktop:bg-background w-full ">
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
      <div className="grid grid-cols-12 mobile:gap-y-[48px] desktop:gap-[30px] w-full  pt-[24px]">
        <div className="mobile:col-span-12 desktop:col-span-8 ">
          <div className="flex justify-between items-center">
            <h3 className="text-[16px] font-[600] leading-[19.36px]">
              Weekly Activity
            </h3>
          </div>
          <div className="flex gap-[30px] overflow-x-auto overflow-y-hidden scrollbar-hide h-full w-full">
            <div className="mt-[24px] w-full">
              <WeeklyActivityChart data={MOCK_WEEKLY_ACTIVITY} />
            </div>
          </div>
        </div>
        <div className="mobile:col-span-12 desktop:col-span-4">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-[16px] font-[600] leading-[19.36px]">
              Expense Statistics
            </h3>
          </div>

          <div className="items-center overflow-x-hidden overflow-y-auto scrollbar-hide h-full mt-[24px]">
            <ExpenseStatistics data={expenses} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 mobile:gap-y-[48px] desktop:gap-[30px] w-full pt-[24px]">
        <div className="mobile:col-span-12 desktop:col-span-5 ">
          <div className="flex justify-between items-center">
            <h3 className="text-[16px] font-[600] leading-[19.36px]">
              Quick Transfer
            </h3>
          </div>
          <div className="flex justify-center items-center gap-[30px] overflow-x-auto overflow-y-hidden scrollbar-hide h-full w-full">
            <div className="mt-[24px] w-full ">
              <QuickTransfer />
            </div>
          </div>
        </div>
        <div className="mobile:col-span-12 desktop:col-span-7">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-[16px] font-[600] leading-[19.36px]">
              Balance History
            </h3>
          </div>

          <div className="items-center overflow-x-hidden overflow-y-auto scrollbar-hide  mt-[24px]">
            <BalanceHistoryChart data={history} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
