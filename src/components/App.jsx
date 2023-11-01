import { Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Products } from '../pages/Products';
import { NotFound } from '../pages/NotFound';
import { ProductDetails } from '../pages/ProductDetails';
import { Container, Header, Logo, Link } from './App.styled';
import { Mission } from './Mission';

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
