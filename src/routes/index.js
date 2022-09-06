import HeaderOnly from '../components/Layout/HeaderOnly';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Frofile from '~/pages/Frofile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
//publicRoutes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/@:nickname', component: Frofile }, 
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
