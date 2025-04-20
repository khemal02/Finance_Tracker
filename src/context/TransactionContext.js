import React, { createContext, useState, useEffect } from 'react';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    // Load from localStorage on init
    const saved = localStorage.getItem('transactions');
    if (saved) {
      // Parse and convert date strings to Date objects
      const parsed = JSON.parse(saved);
      return parsed.map((t) => ({
        ...t,
        date: new Date(t.date), // Convert string to Date
      }));
    }
    return [];
  });

  // Save to localStorage on transactions change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};