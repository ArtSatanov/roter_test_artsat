import { Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Products } from './components/Products/Products';
import { NotFound } from './components/NotFound/NotFound';
import { ProductDetails } from './components/ProductDetails/ProductDetails';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
