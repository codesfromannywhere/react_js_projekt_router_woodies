import AboutImg from "../images/About.png"
import HeadImg from "../images/Headline.png"

const About = () => {
    return (
        <section>
            <article className="hey">
                <img src={HeadImg} alt="Bowls" />
            </article>
            <div>
                <img src={AboutImg} alt="Bowls" />
                <h2>WOODIES is the home of modern wooden furniture</h2>
            </div>
        </section>
    );
}

export default About;