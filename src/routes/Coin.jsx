import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify"
import "./Coin.css";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const url = `https://api.coingecko.com/api/v3/coins/${params.id}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return (
    <>
      {coin ? (
        <div>
          <div className="coin-container">
            <div className="content">
              <h1 style={{ textAlign: "center" }}>{coin.name}</h1>
            </div>
            <div className="content">
              <div className="rank">
                <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
              </div>
              <div className="info">
                <div className="coin-heading">
                  {coin.image ? (
                    <img src={coin.image.small} alt="coin" />
                  ) : null}
                  <p>{coin?.name}</p>
                  <p>{coin.symbol ? coin.symbol.toUpperCase() : null}</p>
                </div>
                <div className="coin-price">
                  <h1 style={{ textAlign: "center" }}>
                    ₹{coin?.market_data?.current_price?.inr.toLocaleString()}
                  </h1>
                </div>
              </div>
            </div>
            <div className="content">
              <table>
                <thead>
                  <tr>
                    <th>24h</th>
                    <th>7d</th>
                    <th>14d</th>
                    <th>30d</th>
                    <th>60d</th>
                    <th>200d</th>
                    <th>1y</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {coin?.market_data?.price_change_percentage_24h.toFixed(
                        1
                      )}
                      %
                    </td>
                    <td>
                      {coin?.market_data?.price_change_percentage_7d.toFixed(1)}
                      %
                    </td>
                    <td>
                      {coin?.market_data?.price_change_percentage_14d.toFixed(
                        1
                      )}
                      %
                    </td>
                    <td>
                      {coin?.market_data?.price_change_percentage_30d.toFixed(
                        1
                      )}
                      %
                    </td>
                    <td>
                      {coin?.market_data?.price_change_percentage_60d.toFixed(
                        1
                      )}
                      %
                    </td>
                    <td>
                      {coin?.market_data?.price_change_percentage_200d.toFixed(
                        1
                      )}
                      %
                    </td>
                    <td>
                      {coin?.market_data?.price_change_percentage_1y.toFixed(1)}
                      %
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="content">
              <div className="stats">
                <div className="left">
                  <div className="row">
                    <h4>24 Hour Low</h4>
                    <p>₹{coin?.market_data?.low_24h?.inr}</p>
                  </div>
                  <div className="row">
                    <h4>24 Hour High</h4>
                    <p>₹{coin?.market_data?.high_24h?.inr}</p>
                  </div>
                </div>
                <div className="right">
                  <div className="row">
                    <h4>Market Capacity</h4>
                    <p>
                      ₹{coin?.market_data?.market_cap?.inr.toLocaleString()}
                    </p>
                  </div>
                  <div className="row">
                    <h4>Circulating Supply</h4>
                    <p>
                      ₹{coin?.market_data?.circulating_supply.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="about">
                <h3>About</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(coin?.description?.en),
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      ) : <>Loading...</>}
    </>
  );
};

export default Coin;
