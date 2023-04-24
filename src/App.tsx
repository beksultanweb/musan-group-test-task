import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import List from './components/List';
import FormComp from './components/Form';
import Thankyou from './components/Thankyou';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route path='/' element={<FormComp/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/thankyou' element={<Thankyou/>}/>
      </Route>
    </Routes>
  );
}

export default App;
