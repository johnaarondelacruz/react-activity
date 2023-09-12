import "./index.css";
import Picture2 from "../../assets/picture2.png";

const About = () => {
  return (
    <>
      <h1>About Me</h1>
      <img src={Picture2} alt="" />
      <div className="about-container">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          natus ipsam quod voluptatibus rem corrupti ipsa ducimus accusantium
          aliquam tempora.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quas
          minus rerum? Possimus dolores eligendi placeat minima id delectus vero
          optio repudiandae repellendus ipsam voluptatibus voluptatum fugit
          excepturi asperiores quisquam, modi eius iusto eum sit. Dignissimos
          nesciunt aliquid debitis illum cum a quo possimus inventore enim, ad
          veritatis neque! Vitae.
        </p>
        <p>Lorem ipsum dolor sit.</p>
      </div>
    </>
  );
};

export default About;
