import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./Coins.css"
import CoinItem from './CoinItem';

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data);
    }).catch((err) => console.log(err))
  },[])
  if(!coins.length) return null;
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24hVolume</p>
          <p className='hide-mobile' >Total Volume</p>
          <p className='hide-mobile' >Market Cap</p>
        </div>
        <CoinItem coins={coins} />
      </div>
    </div>
  );
}

export default Coins