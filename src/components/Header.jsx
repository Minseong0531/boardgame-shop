import { Link } from "react-router-dom";

function Header(){
    return(
        <header id="main-header">
            <div className="innerbox">
                <nav>
                    <ul>
                        <li>
                            <a href="#">Menu1</a>
                            <div className="sub">
                                <ul>
                                    <li>sub1-1</li>
                                    <li>sub1-1</li>
                                    <li>sub1-1</li>
                                    <li>sub1-1</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">Menu2</a>
                            <div className="sub">
                                <ul>
                                    <li>sub2-1</li>
                                    <li>sub2-1</li>
                                    <li>sub2-1</li>
                                    <li>sub2-1</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">Menu3</a>
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
                            <a href="#">Menu4</a>
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
                            <a href="#">Menu5</a>
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