import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Registro';
import NotFound from '../containers/NotFound';

const serverRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default serverRoutes;
