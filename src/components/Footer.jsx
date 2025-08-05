import './Footer.css';

function Footer(){

    return(
        <footer id="main-footer">
            <div className="footer-section about">
                <h4>회사 정보</h4>
                <ul>
                    <li>회사소개</li>
                    <li>이메일: contact@boardgame.com</li>
                </ul>
            </div>
            <div className="footer-section support">
                <h4>고객 지원</h4>
                <ul>
                    <li>FAQ</li>
                    <li>문의하기</li>
                </ul>
            </div>

            <div className="footer-section sns">
                <h4>팔로우</h4>
                <ul>
                    <li>Instagram</li>
                    <li>YouTube</li>
                </ul>
            </div>

            <div className="footer-bottom">
                <p>© 2025 BoardGameWorld. All rights reserved.</p>
                <strong>"본 사이트는 비영리적인 목적으로 제작되었으며, 상업적 의도는 없습니다."</strong>
                <p>이용약관 | 개인정보처리방침</p>
            </div>
        </footer>
    )
}
export default Footer;