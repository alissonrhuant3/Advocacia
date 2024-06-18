import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './pages/principal';
import Servicos from './pages/servicos';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Principal />}></Route>
                <Route path='/servicos' element={<Servicos />}></Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;