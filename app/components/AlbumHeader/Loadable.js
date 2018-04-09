import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./AlbumHeader'),
  loading: () => null,
});
