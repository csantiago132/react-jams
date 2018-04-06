import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./PlayerBar'),
  loading: () => null,
});
