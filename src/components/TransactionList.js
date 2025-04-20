import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Transaction History</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions yet.</p>
      ) : (
        <ul className="space-y-3">
          {transactions.map((t) => (
            <li
              key={t.id}
              className="flex justify-between p-3 bg-white rounded-lg shadow"
            >
              <span>{t.description}</span>
              <span
                className={t.category === 'income' ? 'text-green-600' : 'text-red-600'}
              >
                {t.category === 'income' ? '+' : '-'}₹{t.amount.toFixed(2)}
              </span>
              <span className="text-gray-500">
                {t.date.toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;