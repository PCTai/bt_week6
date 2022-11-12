
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';

function App() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
          const Page = route.element;


          return (
            <Route
              path={route.path}
              key={route.id}
              element={
                  <Page />
              }
            />
          );
        })}

    </Routes>
  );
}

export default App;
