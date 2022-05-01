import React from 'react'
import "./Signup.css"
import trade from "../../assets/trade.png"

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        {/* Left */}
        <div className="left">
            <img src={trade} alt="Trade" />
        </div>
        {/* Right */}
        <div className="right">
            <h2>Earn passive income with Crypto.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea assumenda recusandae consectetur dolorum. Quasi cum quidem cumque incidunt eveniet tempore odit, maiores omnis atque esse, aspernatur.</p>
            <div className="input-container">
                <input type="email" name="Email" placeholder='Enter your Email...' />
                <button className="btn">Message Us</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Signup