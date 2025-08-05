import { Link, useLocation } from 'react-router-dom';
import {
    FaTachometerAlt,
    FaUsers,
    FaFileInvoiceDollar
} from 'react-icons/fa';

const navItems = [
    { to: '/', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { to: '/users', label: 'Users', icon: <FaUsers /> },
    { to: '/billing', label: 'Billing', icon: <FaFileInvoiceDollar /> },
];

const Sidebar: React.FC = () => {
    const location = useLocation();

    return (
        <div className="w-60 bg-gradient-to-b from-red-900 via-red-800 to-red-700 text-white h-screen p-6 space-y-6 shadow-lg">
            <nav className="space-y-2">
                {navItems.map(({ to, label, icon }) => (
                    <Link
                        key={to}
                        to={to}
                        className={`flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                            location.pathname === to ? 'bg-red-600 shadow-md' : 'hover:bg-red-700'
                        }`}
                    >
                        <span className="text-lg text-white">{icon}</span>
                        {label}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
