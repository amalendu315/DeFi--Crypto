import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import Signup from "./components/Signup/Signup";
import Coins from "./components/Coins/Coins";
import Coin from "./routes/Coin";
import News from "./components/News/News";


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
        <Route exact path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
