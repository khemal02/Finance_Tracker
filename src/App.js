import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TransactionProvider } from './context/TransactionContext';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import Reports from './components/Reports';

function App() {
  return (
    <TransactionProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          {/* Navigation */}
          <nav className="bg-blue-600 p-4 text-white">
            <ul className="flex space-x-6 justify-center">
              <li><Link to="/" className="hover:underline">Dashboard</Link></li>
              <li><Link to="/transactions" className="hover:underline">Transactions</Link></li>
              <li><Link to="/reports" className="hover:underline">Reports</Link></li>
            </ul>
          </nav>
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<TransactionList />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </Router>
    </TransactionProvider>
  );
}

export default App;