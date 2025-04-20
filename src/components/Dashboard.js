import React, { useContext } from 'react';
import TransactionForm from './TransactionForm';
import { TransactionContext } from '../context/TransactionContext';

const Dashboard = () => {
  const { transactions } = useContext(TransactionContext);
  const totalIncome = transactions
    .filter((t) => t.category === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions
    .filter((t) => t.category === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center font-bold text-blue-600 mb-6">Finance Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Summary */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <p className="text-green-600">Income: ₹{totalIncome.toFixed(2)}</p>
          <p className="text-red-600">Expenses: ₹{totalExpenses.toFixed(2)}</p>
          <p className="text-blue-600">Balance: ₹{(totalIncome - totalExpenses).toFixed(2)}</p>
        </div>
        {/* Transaction Form */}
        <TransactionForm />
      </div>
    </div>
  );
};

export default Dashboard;
