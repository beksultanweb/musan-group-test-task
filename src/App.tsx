import { useRoutes } from 'react-router-dom';

import Header from './components/Header';
import { routeElements } from './config/routeElements';

function App() {
  const routes = useRoutes(routeElements);

  return (
    <div>
      <Header />
      {routes}
    </div>
  );
}

export default App;
