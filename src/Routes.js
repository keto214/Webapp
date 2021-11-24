import CategoryBegin from './component/CateGoryBegin/CategoryBegin';
import Contact from './component/contact/contact';
import ProductDetail from './component/ProductDetail/ProductDetail';
import NotFound from './component/NotFound/NotFound';
import Cart from './component/Cart/Cart';
import PostProduct from './component/PostProduct/PostProduct';
import UserDetail from './component/UserDetail/UserDetail';
import EditInfo from './component/UserDetail/EditInfo';
import EditProduct from './component/EditProduct/EditProduct';
import Order from './component/Cart/Order';
import OrderDetail from './component/Cart/OrderDetail';
import OrderSeller from './component/Cart/OrderSeller';
import OrderHistory from './component/Cart/OrderHistory';
import Dashboard from './component/Admin/Dashboard';
import UserDetailAdmin from './component/Admin/detail/UserDetailAdmin';
import ProductDetailAdmin from './component/Admin/detail/ProductDetailAdmin';
import ProductRating from './component/Cart/ProductRating';
import OrderDetailAdmin from './component/Admin/detail/OrderDetailAdmin';
import React from 'react';

const Routes = [
     {
          path: '/',
          exact: true,
          main: ({ match }) => <CategoryBegin match={match} />
     },
     {
          path: '/contact',
          exact: false,
          main: () => <Contact />
     },
     {
          path: "/detail/:id/:slug",
          exact: true,
          main: () => < ProductDetail />
     },
     {
          path: '/carts',
          exact: false,
          main: () => <Cart />
     },
     {
          path: '/postproduct',
          exact: false,
          main: () => <PostProduct />
     },
     {
          path: '/listItem',
          exact: false,
          main: () => <UserDetail />
     },
     {
          path: '/editInfo',
          exact: false,
          main: () => < EditInfo />
     },
     {
          path: '/editproduct',
          exact: false,
          main: () => < EditProduct />
     },
     {
          path: '/listorder',
          exact: false,
          main: () => < Order />
     },
     {
          path: '/orderdetail',
          exact: false,
          main: () => <OrderDetail />
     },
     {
          path: '/orderhistorydetail',
          exact: false,
          main: () => <OrderHistory />
     },
     {
          path: '/orderhistory',
          exact: false,
          main: () => <OrderSeller />
     },
     {
          path: '/admin/user-detail',
          exact: false,
          main: () => <UserDetailAdmin />
     },
     {
          path: '/admin/product-detail',
          exact: false,
          main: () => <ProductDetailAdmin />
     },
     {
          path: '/dashboard',
          exact: false,
          main: () => <Dashboard />
     },
     {
          path: '/rating',
          exact: false,
          main: () => < ProductRating />
     },
     {
          path: '/admin/order-detail',
          exact: false,
          main: () => <OrderDetailAdmin />
     },
     {
          path: '',
          exact: false,
          main: () => < NotFound />
     } //only end of array
]

export default Routes;