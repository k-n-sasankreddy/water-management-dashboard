import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';

const AppRouter = () => (
    <Router>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                {/* Add other routes here */}
            </Route>
        </Routes>
    </Router>
);

export default AppRouter;

