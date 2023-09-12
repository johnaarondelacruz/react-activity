import "./index.css";
import Picture from "../../assets/picture.png";
const Home = () => {
  return (
    <main>
      <img src={Picture} alt="" />
      <div className="home-container">
        <h1>This is a dummy text</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fuga
          laboriosam molestias accusantium dolores, nobis maiores explicabo.
          Facere, soluta dolores?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fuga
          laboriosam molestias accusantium dolores, nobis maiores explicabo.
          Facere, soluta dolores?
        </p>
      </div>
    </main>
  );
};

export default Home;
