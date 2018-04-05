import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./SongListTable'),
  loading: () => null,
});
