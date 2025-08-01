import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { useParams } from 'react-router-dom';
import { toggleWishlist } from '../redux/slices/wishlistSlice';
import { fetchProducts } from '../redux/slices/productsSlice';
import { useEffect } from 'react';
import './ProductDetail.css'

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
    <div id='product-detail'>
      <div className="inner-box">
        <div className="img-wrap">
          <img src={product.src} alt='제품 이미지'/>
        </div>
        <div className="text-wrap">
          <h2>{product.name}</h2>
          <table>
            <tbody>
              <tr>
                <th>가격:</th>
                <td>{product.price.toLocaleString()}원</td>
              </tr>
              <tr>
                <th>카테고리:</th>
                <td>{product.category}</td>
              </tr>
              <tr>
                <th>브랜드:</th>
                <td>{product.brand}</td>
              </tr>
              <tr>
                <th>리뷰:</th>
                <td>{product.reviewCount}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => dispatch(addToCart(product))}>장바구니 담기</button>
          <button onClick={() => dispatch(toggleWishlist(product))}>찜하기</button>
        </div>
      </div>
        <img src={product.detail} alt="상품 상세" />
    </div>
  );
}

export default ProductsDetail