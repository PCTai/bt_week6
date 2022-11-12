
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';

function App() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {


          return (
            <Route
              path={route.path}
              key={route.id}
              element={
                route.element
              }
            />
          );
        })}

    </Routes>
  );
}

export default App;
