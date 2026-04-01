import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";   // ← এটা যোগ করো

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <Navbar cartCount={cartCount} />
      <Banner />
      <Stats />  
    </div>
  );
}

export default App;