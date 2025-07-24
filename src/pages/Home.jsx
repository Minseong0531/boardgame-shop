import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { toggleWishlist } from '../redux/slices/wishlistSlice';

function Home(){

    const dispatch = useDispatch();
    const {list, status} = useSelector((state)=> state.products);
    const wishlistItems = useSelector(state => state.wishlist.items);
    const isInWishlist = (id) => wishlistItems.some(item => item.id === id);
    
    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);
    
      if (status === 'loading') return <p>상품 불러오는 중...</p>;
      if (status === 'failed') return <p>상품을 불러오지 못했습니다.</p>;

      
      
    return(
        <div>
        {list.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <div className="img-wrap">
                <img src={product.src} />
            </div>
            <p>{product.price.toLocaleString()}원</p>
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
    )
}

export default Home;