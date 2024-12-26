import { FC } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#FC7900', '#343C6A', '#396AFF', '#232323'];
const RADIAN = Math.PI / 180;

interface Props {
  data: any[];
}

const ExpenseStatistics: FC<Props> = ({ data }) => {
  const renderCustomizedLabel = ({
    name,
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-xs font-bold "
      >
        <tspan
          x={x}
          y={y - 8}
          fill="white"
        >{`${(percent * 100).toFixed(0)}%`}</tspan>
        <tspan x={x + 8} y={y + 7}>
          {name}
        </tspan>
      </text>
    );
  };

  return (
    <div className="bg-card rounded-3xl aspect-[350/322]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                strokeWidth={8.5}
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                className="outline-none"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseStatistics;
