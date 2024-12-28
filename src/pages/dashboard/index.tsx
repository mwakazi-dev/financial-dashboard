import { useQuery } from '@tanstack/react-query';

import { transactionService } from '../../services/transaction';
import CreditCard from '../../components/CreditCard';
import WeeklyActivityChart from '../../components/WeeklyActivityChart';
import ExpenseStatistics from '../../components/ExpenseStatistics';
import GridTitle from '../../components/GridTitle';
import TransactionList from '../../components/TransactionList';

const DashboardPage = () => {
  // Queries
  const {
    data: transactionsHistoryData,
    isLoading: isTransactionHistoryLoading,
  } = useQuery({
    queryKey: ['getTransactionHistoy'],
    queryFn: transactionService.getTransactionHistory,
  });

  const creditCards = [
    {
      id: '1',
      cardNumber: '1234567890123456',
      cardHolderName: 'John Doe',
      cardExpiry: '01/25',
      balance: 4000,
    },
    {
      id: '2',
      cardNumber: '1234567890123456',
      cardHolderName: 'John Doe',
      cardExpiry: '01/25',
      balance: 9000,
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

  return (
    <section className="mobile:bg-card desktop:bg-background mobile:py-[20px] mobile:px-[25px] desktop:py-[24px] desktop:px-[40px]">
      {/* start my cards and transactions section */}
      <div className="grid grid-cols-12 desktop:gap-x-[30px] mobile:gap-y-[22px] w-full">
        <div className="col-span-12 desktop:col-span-8">
          <GridTitle title="My Cards" path="/cards" />
          <div className="flex desktop:gap-x-[30px] w-full overflow-x-auto overflow-y-hidden scrollbar-hide mt-[22px] desktop:mt-[20px]">
            {creditCards.map((item, index) => (
              <div key={item.id} className="w-full">
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
        <div className="col-span-12 desktop:col-span-4 ">
          <GridTitle title="Transactions" />
          <div className="mt-[22px] desktop:mt-[20px] overflow-y-scroll overflow-x-hidden">
            <TransactionList
              isLoading={isTransactionHistoryLoading}
              transactions={transactionsHistoryData}
            />
          </div>
        </div>
      </div>
      {/* end my cards and transactions section */}
      {/* start weekly activity section */}
      <div className="grid grid-cols-12 desktop:gap-x-[30px] mobile:gap-y-[22px] w-full mt-[30px]">
        <div className="col-span-12 desktop:col-span-8">
          <GridTitle title="Weekly Activity" />
          <div className="mt-[22px] desktop:mt-[20px] ">
            <WeeklyActivityChart data={MOCK_WEEKLY_ACTIVITY} />
          </div>
        </div>
        <div className="col-span-12 desktop:col-span-4">
          <GridTitle title="Expenses" />
          <div className="mt-[22px] desktop:mt-[20px]">
            <ExpenseStatistics data={expenses} />
          </div>
        </div>
      </div>
      {/* end weekly activity section */}
    </section>
  );
};

export default DashboardPage;
