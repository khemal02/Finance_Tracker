import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const TransactionForm = () => {
  const { addTransaction } = useContext(TransactionContext);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('expense');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || amount <= 0) {
      alert('Please fill all fields with valid data');
      return;
    }
    addTransaction({
      description,
      amount: parseFloat(amount),
      category,
      date: new Date(),
    });
    setDescription('');
    setAmount('');
    setCategory('expense');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>
      <input
        type="text"
        placeholder="Description (e.g., Groceries)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Amount (₹)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;