import { lazy } from 'react';
import { useQuery } from '@tanstack/react-query';

import { transactionService } from '../../services/transaction';
import { cardService } from '../../services/card';
import { activityService } from '../../services/activity';
import { expenseService } from '../../services/expense';
import GridTitle from '../../components/GridTitle';
import CardLoading from '../../components/CardLoading';

const CreditCard = lazy(() => import('../../components/CreditCard'));
const TransactionList = lazy(() => import('../../components/TransactionList'));
const WeeklyActivityChart = lazy(
  () => import('../../components/WeeklyActivityChart'),
);
const ExpenseStatistics = lazy(
  () => import('../../components/ExpenseStatistics'),
);

const DashboardPage = () => {
  // Queries
  const {
    data: transactionsHistoryData,
    isLoading: isTransactionHistoryLoading,
  } = useQuery({
    queryKey: ['getTransactionHistoy'],
    queryFn: transactionService.getTransactionHistory,
  });

  const { data: cardData, isLoading: isCardLoading } = useQuery({
    queryKey: ['getCards'],
    queryFn: cardService.getCards,
  });

  const { data: weeklyActivityData, isLoading: isWeeklyActivityLoading } =
    useQuery({
      queryKey: ['getWeeklyActivity'],
      queryFn: activityService.getWeeklyActivity,
    });

  const { data: expenseStatisticsData, isLoading: isExpenseStatisticsLoading } =
    useQuery({
      queryKey: ['getExpenses'],
      queryFn: expenseService.getExpenses,
    });

  return (
    <section className="mobile:bg-card desktop:bg-background mobile:py-[20px] mobile:px-[25px] desktop:py-[24px] desktop:px-[40px]">
      {/* start my cards and transactions section */}
      <div className="grid grid-cols-12 desktop:gap-x-[30px] mobile:gap-y-[22px] w-full">
        <div className="col-span-12 desktop:col-span-8">
          <GridTitle title="My Cards" path="/cards" />
          <div className="flex desktop:gap-x-[30px] w-full overflow-x-auto overflow-y-hidden scrollbar-hide mt-[22px] desktop:mt-[20px]">
            {isCardLoading && <CardLoading />}
            {cardData?.map((item: any, index: number) => (
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
            <WeeklyActivityChart
              isLoading={isWeeklyActivityLoading}
              data={weeklyActivityData}
            />
          </div>
        </div>
        <div className="col-span-12 desktop:col-span-4">
          <GridTitle title="Expense Statistics" />
          <div className="mt-[22px] desktop:mt-[20px]">
            <ExpenseStatistics
              isLoading={isExpenseStatisticsLoading}
              data={expenseStatisticsData}
            />
          </div>
        </div>
      </div>
      {/* end weekly activity section */}
    </section>
  );
};

export default DashboardPage;
