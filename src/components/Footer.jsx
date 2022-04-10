const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__contact">
                <div className="footer__contact__logo">logo</div>
                <div className="footer__contact__text">text</div>
                <div className="footer__contact__address">address</div>
                <div className="footer__contact__telephone">telephone</div>
                <div className="footer__contact__email">email</div>
                
            </div>
           
            <div className="footer__institutional">
                <ul>
                    <li className="footer__institutional__about">about</li>
                    <li className="footer__institutional__about">privacy</li>
                    <li className="footer__institutional__about">terms</li>
                    <li className="footer__institutional__about">payment</li>
                </ul>
            </div>
            <div className="footer__social-media">
                <ul>
                    <li className="footer__social-media__fb">fb icon</li>
                    <li className="footer__social-media__ig">ig icon</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;