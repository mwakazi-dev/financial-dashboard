import { ReactComponent as CogIcon } from '../assets/cog.svg';
import { ReactComponent as BellIcon } from '../assets/bell.svg';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as CreditCardIcon } from '../assets/icons/card.svg';
import { ReactComponent as TransactionIcon } from '../assets/icons/transaction.svg';
import { ReactComponent as AccountsIcon } from '../assets/icons/person.svg';
import { ReactComponent as InvestmentsIcon } from '../assets/icons/economic.svg';
import { ReactComponent as LoanIcon } from '../assets/icons/loan.svg';
import { ReactComponent as ServiceIcon } from '../assets/icons/service.svg';
import { ReactComponent as SettingIcon } from '../assets/icons/settings.svg';
import { ReactComponent as EconometricsIcon } from '../assets/icons/econometrics.svg';
import { NavItem } from '../types/nav';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Setting',
    path: '/setting',
    icon: <CogIcon />,
  },
  {
    label: 'Notifications',
    path: '/notifications',
    icon: <BellIcon className="w-[400px]" />,
  },
];

export const SIDE_NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    label: 'Transactions',
    path: '/transactions',
    icon: <TransactionIcon />,
  },
  {
    label: 'Accounts',
    path: '/accounts',
    icon: <AccountsIcon />,
  },
  {
    label: 'Investments',
    path: '/investments',
    icon: <InvestmentsIcon />,
  },
  {
    label: 'Credit Cards',
    path: '/credit-cards',
    icon: <CreditCardIcon />,
  },
  {
    label: 'Loans',
    path: '/loans',
    icon: <LoanIcon />,
  },
  {
    label: 'Services',
    path: '/services',
    icon: <ServiceIcon />,
  },
  {
    label: 'My Privileges',
    path: '/my-privileges',
    icon: <EconometricsIcon />,
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: <SettingIcon />,
  },
];
