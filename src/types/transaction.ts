export interface Transaction {
  id?: string;
  createdAt: string;
  type: 'INCOME' | 'EXPENSE';
  amount: number;
  title: string;
  category: string;
}
