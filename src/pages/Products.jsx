import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { toggleWishlist } from '../redux/slices/wishlistSlice';
import { useEffect } from 'react';
import { fetchProducts } from '../redux/slices/productsSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Products.css';

function Products() {
  const dispatch = useDispatch();
  const {list, status} = useSelector((state)=> state.products);
  const wishlistItems = useSelector(state => state.wishlist.items);
  const MAX_PRODUCTS = 10;
  const isInWishlist = (id) => wishlistItems.some(item => item.id === id);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <div>로딩 중...</div>;
  if (status === 'failed') return <div>상품을 불러오는 데 실패했습니다.</div>;

  console.log('상품 리스트:', list, status);
  return (
    <section className='product-wrap'>
      <div className="title">
        <h2>BEST ITEM</h2>
      </div>
      <div className="flex">
        <div className="list">
          <ul className="best-item">
            {list.slice(0, MAX_PRODUCTS).map((product) => (
              <li key={product.id} className='products'>
                <div className='best-thumb'>
                  <Link to={`/product/${product.id}`}>
                    <img src={product.src} />
                  </Link>
                </div>
                <div className='best-text'>
                  <div className="btn-wrap">
                    <button onClick={() => dispatch(addToCart(product))} className='to-cart'>
                      <AddShoppingCartIcon />
                    </button>
                    <button onClick={() => dispatch(toggleWishlist(product))} className='to-wish'>
                      {isInWishlist(product.id) ? <FavoriteIcon /> : <FavoriteBorderIcon/>}
                    </button>
                  </div>
                  <Link to={`/product/${product.id}`}> 
                    <h3>{product.name}</h3>
                    <p>{product.price.toLocaleString()}원</p>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky">
          <div className="best-thumb">
            <div className="thumb-area">
              <div className="thumb">
                <img src="/image/thumb/best-thumb.jpg" alt="썸네일" />
              </div>
              <div className="text-area">
                <h2>지금 가장 인기있는 보드게임!</h2>
                <p>
                  검증된 인기게임 <br />
                  초보부터 고수까지 모두 추천
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Products