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

  const creditCards = [
    {
      id: '1',
      cardNumber: '1234 5678 9012 3456',
      cardHolderName: 'John Doe',
      cardExpiry: '01/25',
      balance: 4000,
    },
    {
      id: '2',
      cardNumber: '1234 5678 9012 3456',
      cardHolderName: 'John Doe',
      cardExpiry: '01/25',
      balance: 9000,
    },
  ];

  const users = [
    {
      id: '1',
      name: 'John Doe',
      role: 'Director',
      imageUrl: 'https://i.pravatar.cc/300',
    },
    {
      id: '2',
      name: 'Liam Doe',
      role: 'Manager',
      imageUrl: 'https://i.pravatar.cc/300',
    },
    {
      id: '3',
      name: 'Olivia Doe',
      role: 'Developer',
      imageUrl: 'https://i.pravatar.cc/300',
    },
  ];

  return (
    <section className="mobile:bg-card desktop:bg-background mobile:py-[20px] mobile:px-[25px]">
      <div className="grid grid-cols-12 mobile:gap-y-[22px] desktop:gap-[30px] w-full">
        <div className="mobile:col-span-12 desktop:col-span-8">
          <div className="flex justify-between items-center">
            <h3 className="mobile:text-[16px] mobile:leading-[19.36px] text-foreground  font-sans font-[600]">
              My Cards
            </h3>
            <Link
              to="/my-cards"
              className="mobile:text-[16px] mobile:leading-[19.36px] font-sans font-[600] "
            >
              See All
            </Link>
          </div>
          <div className="flex mobile:gap-x-[30px] overflow-x-auto overflow-y-hidden scrollbar-hide h-full">
            {creditCards.map((item, index) => (
              <div key={item.id} className="mobile:mt-[22px]">
                <CreditCard
                  cardNumber={item.cardNumber}
                  cardHolderName={item.cardHolderName}
                  cardExpiry={item.cardExpiry}
                  balance={item.balance}
                  variant={index === 0 ? 'dark' : 'light'}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mobile:col-span-12 h-full desktop:col-span-4">
          <div className="flex justify-between items-center">
            <h3 className="mobile:text-[16px] mobile:leading-[19.36px] font-lato font-[600]">
              Recent Transaction
            </h3>
          </div>
          <div className="flex flex-col justify-center overflow-x-auto overflow-y-hidden scrollbar-hide h-full">
            <TransactionCard transactions={transactions} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mobile:gap-y-[48px] desktop:gap-[30px] w-full">
        <div className="mobile:col-span-12 desktop:col-span-8">
          <div className="flex justify-between items-center">
            <h3 className="mobile:text-[16px] mobile:leading-[19.36px] font-lato font-[600]">
              Weekly Activity
            </h3>
          </div>
          <div className="flex overflow-x-auto overflow-y-hidden scrollbar-hide h-full w-full">
            <div className="w-full">
              <WeeklyActivityChart data={MOCK_WEEKLY_ACTIVITY} />
            </div>
          </div>
        </div>
        <div className="mobile:col-span-12 desktop:col-span-4">
          <div className="flex justify-between items-center w-full">
            <h3 className="mobile:text-[16px] mobile:leading-[19.36px] font-lato font-[600]">
              Expense Statistics
            </h3>
          </div>
          <div className="w-full">
            <ExpenseStatistics data={expenses} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 mobile:gap-y-[48px] desktop:gap-[30px] w-full">
        <div className="mobile:col-span-12 desktop:col-span-5 ">
          <div className="flex justify-between items-center">
            <h3 className="mobile:text-[16px] mobile:leading-[19.36px] font-lato font-[600]">
              Quick Transfer
            </h3>
          </div>
          <div className="w-full mt-[32px]">
            <QuickTransfer users={users} />
          </div>
        </div>
        <div className="mobile:col-span-12 desktop:col-span-7">
          <div className="flex justify-between items-center w-full">
            <h3 className="mobile:text-[16px] mobile:leading-[19.36px] font-lato font-[600]">
              Balance History
            </h3>
          </div>
          <div className="w-full mobile:mt-[12px]">
            <BalanceHistoryChart data={history} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
