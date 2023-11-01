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
