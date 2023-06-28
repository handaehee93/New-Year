import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import NewProduct from './pages/NewProduct';
import MyCart from './pages/MyCart';
import NotFound from './pages/NotFound';
import ProtectedRoute from './pages/ProtectedRoute';
import Male from './pages/Male';
import Female from './pages/Female';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: '/products', 
        element: <AllProducts />
      },
      {
        path: '/products/new',
        element:(
          // 그냥 requireAdmin만 입력해도 requireAdmin={true}와 똑같다.
          <ProtectedRoute requireAdmin={true}>
            <NewProduct />
          </ProtectedRoute>
        )
      },
      {
        path: '/products/male',
        element: <Male />
      },
      {
        path: '/products/female',
        element: <Female />
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '/carts',
        element:(
        <ProtectedRoute>
          <MyCart />
        </ProtectedRoute>
        ),
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
