import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { NotFound } from '../pages/NotFound';
import { ProductDetails } from '../pages/ProductDetails';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { lazy } from 'react';

const About = lazy(() => import('../pages/About'));
const Home = lazy(() => import('../pages/Home'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Products = lazy(() => import('../pages/Products'));
const Mission = lazy(() => import('./Mission'));
const Reviews = lazy(() => import('./Reviews'));
const Team = lazy(() => import('./Team'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
