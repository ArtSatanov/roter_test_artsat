import { useLocation, useParams } from 'react-router-dom';
import { getProductById } from '../fakeAPI';
import { BackLink } from '../components/BackLink';

export const ProductDetails = () => {
  const { productId } = useParams();
  const product = getProductById(productId);
  const location = useLocation();
  const backLink = location.state?.from ?? '/products';
  return (
    <main>
      <BackLink to={backLink}>Back to products</BackLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product - {product[0].name} - {product[0].id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
};
