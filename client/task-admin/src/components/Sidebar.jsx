import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-slate-800 text-white p-4">
      <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-blue-400 block">Dashboard</Link>
        </li>
        <li>
          <Link to="/register-question" className="hover:text-blue-400 block">Register Question</Link>
        </li>
        <li>
          <Link to="/categories" className="hover:text-blue-400 block">Categories</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

