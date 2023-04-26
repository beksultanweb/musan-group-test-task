import FormComp from '../components/Form';
import List from '../components/List';
import Thankyou from '../components/Thankyou';

export const routeElements = [
  {
    path: '/',
    element: <FormComp />,
  },
  {
    path: '/list',
    element: <List />,
  },
  {
    path: '/thankyou',
    element: <Thankyou />,
  },
];
