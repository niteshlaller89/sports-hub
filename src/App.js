import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import StarSportsHindi from './pages/StarSportsHindi';
import StarSportsEnglish from './pages/StarSportsEnglish';
import PtvSports from './pages/PtvSports';

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<StarSportsHindi />} />
                    <Route path='/starsp3' element={<StarSportsHindi />} />
                    <Route path='/starsp' element={<StarSportsEnglish />} />
                    <Route path='/ptvsp' element={<PtvSports />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
