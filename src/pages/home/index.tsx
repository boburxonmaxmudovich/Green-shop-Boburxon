import Dashboard from "../../components/dashboard";
import Header from "../../components/header";
import Hero from "../../components/hero";

const Home = () => {
  return (
    <div className=" m-auto">
      <Header />
      <div className="w-[90%] m-auto">
        <Hero />
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
