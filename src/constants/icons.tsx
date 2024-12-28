import { ReactComponent as FinanceIcon } from '../assets/icons/finance.svg';
import { ReactComponent as PaypalIcon } from '../assets/icons/paypal.svg';
import { ReactComponent as DollarIcon } from '../assets/icons/dollar.svg';

export const Icon: { [key: string]: React.ReactNode } = {
  card: <FinanceIcon />,
  paypal: <PaypalIcon />,
  cash: <DollarIcon />,
};
