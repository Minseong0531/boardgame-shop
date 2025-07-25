import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { useParams } from 'react-router-dom';
import { toggleWishlist } from '../redux/slices/wishlistSlice';
import { fetchProducts } from '../redux/slices/productsSlice';
import { useEffect } from 'react';

function ProductsDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {list, status } = useSelector(state => state.products);

  useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, list.length]);

  const product = list.find(item => item.id === parseInt(id));

  if (status === 'loading') return <p>상품 정보를 불러오는 중...</p>;
  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  return (
    <div>
      <div className="img-wrap">
        <img src={product.src} alt='제품 이미지'/>
      </div>
      <h2>{product.name}</h2>
      <p>가격: {product.price.toLocaleString()}원</p>
      <p>카테고리: {product.category}</p>
      <button onClick={() => dispatch(addToCart(product))}>장바구니 담기</button>
      <button onClick={() => dispatch(toggleWishlist(product))}>찜하기</button>
      <img src={product.detail} alt="상품 상세" />
    </div>
  );
}

export default ProductsDetail