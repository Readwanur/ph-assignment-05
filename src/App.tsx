import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
const App = () => {
  const [stackCount, setStackCount] = useState(0);
  return (
    <div>
      <Navbar />
      <Banner />
      <Explore stackCount={stackCount} setStackCount={setStackCount}  />
      <Footer />
    </div>
  );
};

export default App;
