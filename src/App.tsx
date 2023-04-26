import { Routes, Route } from 'react-router-dom';
import { routeElements } from './config/routeElements';
import Header from './components/Header';

function App() {
  return (
    <main className='container'>
      <Header/>
      <Routes>
      {routeElements.map(route => (
        <Route key={route.path} path={route.path} element={<route.element/>}/>
      ))}
      </Routes>
    </main>
  );
}

export default App;
