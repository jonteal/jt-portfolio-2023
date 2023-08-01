import Works from "../Works/Works";

const Home = () => {
  return (
    <div className="h-64 bg-white p-2">
      <div className="text-center mt-10">
        <p className="text-1xl font-light">AVAILABLE FOR WORK</p>
        <h1 className="text-8xl font-light text-black">Jon Jackson</h1>
        <h2 className="text-black font-light text-7xl mb-2">Web Designer</h2>
      </div>
      <img className="w-screen" src="/images/plants.jpeg" alt="" />
    </div>
  );
};

export default Home;
