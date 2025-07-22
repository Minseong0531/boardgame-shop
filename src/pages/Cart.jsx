import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseQty, increaseQty, removeFromCart } from "../redux/slices/cartSlice";


function Cart(){
    const { items, totalAmount } = useSelector((state)=> state.cart);
    const dispatch = useDispatch();

    return(
        <div className="cart">
            <h1>장바구니</h1>
            {items.length === 0 ? (
                <p>장바구니가 비어 있습니다.</p>
            ):(
                <div>
                {items.map((item) => (
                    <div key={item.id}>
                      <div>
                        <h3>{item.name}</h3>
                        <p>{item.price.toLocaleString()}원 × {item.qty}</p>
                      </div>
                      <div>
                        <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                        <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>삭제</button>
                      </div>
                    </div>
                  ))}
                  <h2>총액: {totalAmount.toLocaleString()}원</h2>
                  <button
                    onClick={() => dispatch(clearCart())}
                  >
                    장바구니 비우기
                  </button>
                </div>
            )
        }
            
        </div>
    )
}

export default Cart;