import { useDispatch, useSelector } from "react-redux";
import { removeFromWish } from "../redux/slices/wishlistSlice";
import  './Wishlist.css';
import { Link } from "react-router-dom";
function Wishlist() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);
  

  if (wishlistItems.length === 0) return <p>찜한 상품이 없습니다.</p>

    return (
        <div id="wish-list">
            <div className="inner-box">
                <h2>찜한 상품 목록</h2>
                <div className="flex-wrap">
                    <div className="flex">
                        {wishlistItems.map(item => (
                            <div key={item.id} className="wish-wrap">                                
                                    <div className="thumb-left">
                                        <img src={item.src}/>
                                    </div>
                                    <Link to={`/product/${item.id}`}>
                                        <div className="text-right">
                                            <h3>[{item.brand}]{item.name}</h3>
                                            <p>{item.price.toLocaleString()}원</p>
                                        </div>
                                    </Link>
                                <button onClick={()=>dispatch(removeFromWish(item.id))}>x</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;