import { Endpoints } from '../types/enums';
import requestHandler from '../lib/request';

const getTransactionHistory = () => {
  return requestHandler(Endpoints.TRANSACTION_HISTORY);
};

export const transactionService = {
  getTransactionHistory,
};
