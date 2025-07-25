import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { toggleWishlist } from '../redux/slices/wishlistSlice';
import { useEffect } from 'react';
import { fetchProducts } from '../redux/slices/productsSlice';
function Products() {
  const dispatch = useDispatch();
  const {list, status} = useSelector((state)=> state.products);
  const wishlistItems = useSelector(state => state.wishlist.items);
  const isInWishlist = (id) => wishlistItems.some(item => item.id === id);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  console.log('상품 리스트:', list, status);
  return (
    <div className='product-wrap'>
      {list.map((product) => (
          <div key={product.id} className='products'>
            <Link to={`/product/${product.id}`}>
              <div className="img-wrap">
                  <img src={product.src} />
              </div>
              <h3>{product.name}</h3>
              <p>{product.price.toLocaleString()}원</p>
            </Link>
            <button
              onClick={() => dispatch(addToCart(product))}
            >
              장바구니 담기
            </button>
            
            <button
              onClick={() => dispatch(toggleWishlist(product))}
            >
              {isInWishlist(product.id) ? '찜 해제' : '찜하기'}
            </button>
          </div>
        ))}
    </div>
  );
}

export default Products