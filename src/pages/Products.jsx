import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

export default function Products({ product }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString()}원</p>
      <button
        onClick={() => dispatch(addToCart(product))}
      >
        장바구니 담기
      </button>
    </div>
  );
}