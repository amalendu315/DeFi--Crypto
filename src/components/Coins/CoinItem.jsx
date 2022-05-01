import React from 'react'
import { Link } from 'react-router-dom';
import "./Coins.css";

const CoinItem = (props) => {
    const { coins } = props;
  return (
    <>
        {coins.map((coin, index) => {
            return (
              <Link to={`/coins/${coin.id}`} key={coin.id}>
                <div className="coin-row">
                  <p>{coin.market_cap_rank}</p>
                  <div className="img-symbol">
                    <img src={coin.image} alt="Symbol" />
                    <p>{coin.symbol.toUpperCase()}</p>
                  </div>
                  <p>₹{coin.current_price.toLocaleString()}</p>
                  <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                  <p className="hide-mobile">
                    ₹{coin.total_volume.toLocaleString()}
                  </p>
                  <p className="hide-mobile">
                    ₹{coin.market_cap.toLocaleString()}
                  </p>
                </div>
              </Link>
            );
        })}
    </>
  )
}

export default CoinItem