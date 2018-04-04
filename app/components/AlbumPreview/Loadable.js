import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./AlbumPreview'),
  loading: () => null,
});
