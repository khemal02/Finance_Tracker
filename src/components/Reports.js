import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { TransactionContext } from '../context/TransactionContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const Reports = () => {
  const { transactions } = useContext(TransactionContext);

  // Group expenses by description
  const expenseData = transactions
    .filter((t) => t.category === 'expense')
    .reduce((acc, t) => {
      acc[t.description] = (acc[t.description] || 0) + t.amount;
      return acc;
    }, {});

  const data = {
    labels: Object.keys(expenseData).length ? Object.keys(expenseData) : ['No Data'],
    datasets: [
      {
        data: Object.keys(expenseData).length ? Object.values(expenseData) : [1],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Expense Breakdown</h2>
      <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow">
        <Pie data={data} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>
    </div>
  );
};

export default Reports;