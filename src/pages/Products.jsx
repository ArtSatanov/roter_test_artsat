import { getProducts } from '../fakeAPI';
import { ProductList } from '../components/ProductList';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../components/SearchBox';

export const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? '';

  const updateQuery = (name) => {
    const newParams = name !== '' ? { name } : {};
    setSearchParams(newParams);
  };

  const visibleProduct = products.filter(product => product.name.toLowerCase().includes(productName.toLowerCase()));


  return (
    <main>  
      <SearchBox value={productName} onChange={updateQuery}/>

      <ProductList products={visibleProduct} />
    </main>
  );
};
