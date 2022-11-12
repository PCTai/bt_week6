
import { Navigate, Route, Routes } from 'react-router-dom';
import Filter from './pages/Filter';
import Form from './pages/Form';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Quiz from './pages/Quiz';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/home/*" element={<Home />} />
      <Route path="/" element={<Navigate to="/home"  />} />
      <Route path="/users" element={<Filter/>} />
      <Route path="/form" element={<Form/>} />
      <Route path="/quiz" element={<Quiz/>} />
            
      <Route path="*" element={<NotFound/>} />

    </Routes>
  );
}

export default App;
