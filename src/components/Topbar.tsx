import { FaBell } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Topbar: React.FC = () => {
    return (
        <header className="bg-white px-6 py-4 flex items-center justify-between shadow-md">
            <div className="w-full text-center">
                
            </div>
            <div className="flex items-center gap-6">
                <ThemeToggle />
                <button className="relative hover:text-red-600 transition">
                    <FaBell className="text-xl" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full"></span>
                </button>
                <div className="relative group">
                    <button className="flex items-center gap-2">
                        <img
                            src="/assets/user-avatar.png"
                            alt="User"
                            className="w-8 h-8 rounded-full border border-red-900"
                        />
                        <span className="text-sm font-medium text-red-900">Admin</span>
                    </button>
                    <div className="absolute right-0 mt-2 w-40 bg-red-800 border border-red-600 rounded shadow-md hidden group-hover:block z-10">
                        <ul className="text-sm text-white">
                            <li className="px-4 py-2 hover:bg-red-700 cursor-pointer">Profile</li>
                            <li className="px-4 py-2 hover:bg-red-700 cursor-pointer">Settings</li>
                            <li className="px-4 py-2 hover:bg-red-700 cursor-pointer">Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;

