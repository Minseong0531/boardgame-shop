import { useSelector } from "react-redux";

function Wishlist() {
  const wishlistItems = useSelector(state => state.wishlist.items);

  if (wishlistItems.length === 0) return <p>찜한 상품이 없습니다.</p>

    return (
        <div>
            <h2>찜한 상품 목록</h2>
            {wishlistItems.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <img src={item.src}/>
                    <p>{item.price.toLocaleString()}원</p>
                </div>
            ))}
        </div>
    );
}

export default Wishlist;