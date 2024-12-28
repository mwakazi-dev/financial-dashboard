import { Endpoints } from '../types/enums';
import requestHandler from '../lib/request';

const getExpenses = () => {
  return requestHandler(Endpoints.EXPENSES);
};

export const expenseService = {
  getExpenses,
};
