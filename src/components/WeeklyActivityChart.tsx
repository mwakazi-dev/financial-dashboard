import { FC } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Legend,
  Bar,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import useBreakpoints from '../hooks/useBreakpoints';

interface Props {
  data: any[];
}
const WeeklyActivityChart: FC<Props> = ({ data }) => {
  const { isMobile } = useBreakpoints();

  return (
    <div
      className={
        'bg-card rounded-[25px] aspect-[325/254] desktop:aspect-[730/322]'
      }
    >
      <ResponsiveContainer className="desktop:p-8">
        <BarChart
          barGap={12}
          data={data}
          margin={{ left: 0, right: 0, bottom: 0, top: 0 }}
        >
          <Legend
            verticalAlign="top"
            align="right"
            height={36}
            content={() => (
              <div className="flex gap-[30px] items-center justify-end">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[15px] h-[15px] bg-[#396AFF] rounded-full"></div>
                  <p className="text-[15px] text-[#718EBF]">Deposit</p>
                </div>
                <div className="flex items-center gap-[10px] ">
                  <div className="w-[15px] h-[15px] bg-[#232323] rounded-full"></div>
                  <p className="text-[15px] text-[#718EBF]">Withdraw</p>
                </div>
              </div>
            )}
          />

          <CartesianGrid stroke="#e0e0e0" vertical={false} horizontal={true} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={8}
            tick={{ fill: 'var(--secondary)', fontSize: 12, fontWeight: 400 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={0}
            tick={{ fill: 'var(--secondary)', fontSize: 12, fontWeight: 500 }}
            ticks={[0, 100, 200, 300, 400, 500]}
            domain={[0, 500]}
            width={30}
          />
          <Tooltip />
          <Bar
            dataKey="deposit"
            fill="#232323"
            radius={[30, 30, 30, 30]}
            barSize={isMobile ? 7 : 16}
          />

          <Bar
            dataKey="withdraw"
            fill="#396AFF"
            radius={[30, 30, 30, 30]}
            barSize={isMobile ? 7 : 16}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyActivityChart;
