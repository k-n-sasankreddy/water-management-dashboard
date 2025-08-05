import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex h-screen bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white transition-colors duration-300">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Topbar />
                <main className="flex-1 overflow-y-auto p-6 space-y-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;



