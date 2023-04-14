import FooterImg from "../images/Footer.png"
import Logo from "../images/Logo.png"


const Footer = () => {
    return (
        <section className="footer-section">
            <div>
                <img src={Logo} />
                <p>(012) 8967453</p>
                <p>woodies@gmail.com</p>
                <p>Jakarta, Indonesia</p>
            </div>
            <div>© 2020 WOODIES</div>
            <div>
                <img src={FooterImg} />
            </div>
        </section>

    );
}

export default Footer;