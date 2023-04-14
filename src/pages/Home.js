import HeroImg from "../images/Home.png"
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <section className="home-section">
            <div>
                <h2>Are you looking for <span>woodden furniture</span> for your place?</h2>
                <h1>This is the Right Place</h1>
                <Link to='/products' className="button-style">Explore Categories</Link>
            </div>
            <div>
                <img src={HeroImg} alt="" />
            </div>

        </section>
    );
}

export default Home;