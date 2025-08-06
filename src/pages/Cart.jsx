import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseQty, increaseQty, removeFromCart } from "../redux/slices/cartSlice";
import './Cart.css';

function Cart(){
    const { items, totalAmount } = useSelector((state)=> state.cart);
    const dispatch = useDispatch();

    return(
        <div id="cart">
          <div className="innerbox">
            <h1>장바구니</h1>
            {items.length === 0 ? (
                <p>장바구니가 비어 있습니다.</p>
            ):(
                <table>
                  <thead>
                    <tr>
                      <th scope="col">상품/옵션 정보</th>
                      <th scope="col">수량</th>
                      <th scope="col">상품금액</th>
                      <th scope="col">할인/적립</th>
                      <th scope="col">합계금액</th>
                    </tr>
                  </thead>
                  <tbody>
                      {items.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className="thumb-wrap">
                              <img src={item.src} alt="상품 이미지" />
                              <p>{item.name}</p>
                            </div>
                          </td>
                          <td>
                            <p>{item.qty}</p>
                            <div className="btn-wrap">
                              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                              <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                            </div>
                          </td>
                          <td>{item.price.toLocaleString()}{}</td>
                          <td></td>
                          <td>{item.price*item.qty.toLocaleString()}원</td>
                        </tr>
                        ))
                      }
                  </tbody>
                </table>
            )
        }
            <div className="total-wrap">
              <h2>총액: {totalAmount.toLocaleString()}원</h2>
                <button
                  onClick={() => dispatch(clearCart())}
                >
                  장바구니 비우기
                </button>
            </div>
          </div>
        </div>
    )
}

export default Cart;