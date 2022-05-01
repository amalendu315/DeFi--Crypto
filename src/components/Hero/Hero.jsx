import React from 'react'
import "./Hero.css"
import hero from "../../assets/hero-img.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/*Left Side of the hero */}
        <div className="left">
            <p>Buy & Sell Crypto 24/7 using your wallet.</p>
            <h1>Invest in Cryptocurrency using your Wallet</h1>
            <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
            <div className="input-container">
                <input type="email" placeholder='Enter your email !!' />
                <button className="btn">Learn More</button>
            </div>
        </div>
        {/*Right Side of the hero */}
        <div className="right">
            <div className="img-container">
                <img src={hero} alt="Hero" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero