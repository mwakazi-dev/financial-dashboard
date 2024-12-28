export interface Transaction {
  id?: string;
  title: string;
  createdAt: string;
  type: TransactionType;
  amount: number;
  category: string;
}
export type TransactionType = 'INCOME' | 'EXPENSE';
