import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import Signup from "./components/Signup/Signup";
import Coins from "./components/Coins/Coins";
import Coin from "./routes/Coin";


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Featured />
              <Signup />
            </>
          }
        />
        <Route exact path="/featured" element={<Featured />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coins/:id" element={<Coin />} />
        <Route path="/contact" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
