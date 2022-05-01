import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import "./Featured.css"
import axios from 'axios';

const Featured = () => {
    const [data, setData] = useState(null);
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=6&page=1&sparkline=false";
    useEffect(() => {
        axios.get(url).then(res => {
            setData(res.data)
        }).catch(err => console.log(err));
    },[])
    if(!data) return null;
  return (
    <div className="featured">
      <div className="container">
        {/* Left */}
        <div className="left">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin.</h2>
          <p>See all available asstes: Cryptocurrencies and NFT's.</p>
          <button className="btn">
            <Link style={{ color: "white" }} to="/coins">
              See More Coins
            </Link>
          </button>
        </div>
        {/* Right */}
        <div className="right">
          {data.map((item) => {
            return (
              <Link to="/coins" key={item.name}>
                <div className="card">
                  <div className="top">
                    <img src={item.image} alt="Bitcoin" />
                  </div>
                  <div>
                    <h5>{item.name}</h5>
                    <p>₹{item.current_price.toLocaleString()}</p>
                  </div>
                  {item.price_change_percentage_24h < 0 ? (
                    <span className="red">
                      <FiArrowDown className="icon" />
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="green">
                      <FiArrowUpRight className="icon" />
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Featured