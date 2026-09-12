import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
import Explore from "./components/Explore";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Explore />
      <Footer />
    </div>
  );
};

export default App;
