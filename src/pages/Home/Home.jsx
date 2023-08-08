import "./home.css";

const Home = () => {
  return (
    <div className="h-64 bg-white p-2">
      <div className="text-center mt-10">
        <p className="text-1xl font-light available-text">AVAILABLE FOR WORK</p>
        <h1 className="my-name font-light text-black">Jon Jackson</h1>
        <h2 className="text-black font-light web-sub-header mb-2">
          Web Designer
        </h2>
      </div>
      <img className="w-screen plant-image" src="/images/plants.jpeg" alt="" />
    </div>
  );
};

export default Home;
