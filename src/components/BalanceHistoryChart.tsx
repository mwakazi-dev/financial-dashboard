import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  Area,
} from 'recharts';

import { cn } from '../lib/utils';
import { FC } from 'react';

interface Props {
  data: any[];
}
const BalanceHistoryChart: FC<Props> = ({ data }) => {
  return (
    <div
      className={cn(
        'bg-card rounded-3xl',
        'mobile:aspect-[325/223] max-h-[276px]',
        'desktop:py-[35px] desktop:px-[20px] mobile:py-[14px] mobile:px-[18px] desktop:aspect-[635/276] w-full',
      )}
    >
      <ResponsiveContainer className="">
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#2d61ff" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#2d61ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={true}
            tick={{ fill: 'var(--secondary)', fontSize: 12, fontWeight: 400 }}
          />
          <YAxis
            axisLine={false}
            tickLine={true}
            domain={[0, 800]}
            ticks={[0, 200, 400, 600, 800]}
            tickMargin={0}
            tick={{ fill: 'var(--secondary)', fontSize: 12, fontWeight: 500 }}
            width={30}
          />

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={true}
            stroke="#e5e7eb"
          />

          <Area
            type="monotone"
            dataKey="balance"
            stroke="#1814F3"
            strokeWidth={3}
            fill="url(#colorBalance)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceHistoryChart;
