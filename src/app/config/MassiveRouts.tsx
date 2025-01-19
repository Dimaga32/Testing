import { Navigate } from 'react-router-dom';
import Main from '../../pages/Main';
import Account from '../../pages/Account';
import MyData from '../../pages/MyData';
import About from '../../pages/About';
import Support from '../../pages/Support';
export const publicRouts = [
  {
    path: '*',
    element: <Navigate to="/Main" />,
  },
  {
    path: '/Main',
    element: <Main />,
  },
  {
    path: '/Account',
    element: <Account />,
  },
  {
    path: '/MyData',
    element: <MyData />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/Support',
    element: <Support />,
  },
];
