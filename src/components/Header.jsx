import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

function Header(){
    return(
        <header id="main-header">
            <div className="innerbox">
                <nav>
                    <ul>
                        <li>
                            <a href="#">홈</a>
                        </li>
                        <li>
                            <a href="#">보드게임</a>
                        </li>
                        <li>
                            <a href="#">카테고리</a>
                            <div className="sub">
                                <ul>
                                    <li>sub3-1</li>
                                    <li>sub3-1</li>
                                    <li>sub3-1</li>
                                    <li>sub3-1</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">이벤트</a>
                            <div className="sub">
                                <ul>
                                    <li>sub4-1</li>
                                    <li>sub4-1</li>
                                    <li>sub4-1</li>
                                    <li>sub4-1</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">문의사항</a>
                            <div className="sub">
                                <ul>
                                    <li>sub5-1</li>
                                    <li>sub5-1</li>
                                    <li>sub5-1</li>
                                    <li>sub5-1</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <SearchInput />
                <div className="icon-wrap">
                    <div className="cart">
                        <Link to='/cart'>
                            cart
                        </Link>
                    </div>
                    <div className="user">
                        <Link to='/wishlist'>
                            wish
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;