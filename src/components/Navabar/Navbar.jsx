import React,{ useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { TransactionContext } from '../../context/TransactionContext'
import { FaBars, FaTimes } from 'react-icons/fa'
import "./Navbar.css"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const { connectWallet, connectedAccount, setConnectedAccount } = useContext(TransactionContext);
    const handleClick = () => setClick(!click);
    const handleLogout = (e) => {
      e.preventDefault();
      setConnectedAccount(null);
    }
  return (
    <div className="header">
      <div className="container">
        <h1>
          <Link to="/">
            De<span className="primary">Fi</span>
          </Link>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/featured">Featured</Link>
          </li>
          <li>
            <Link to="/coins">Coins</Link>
          </li>
          <li>
            <Link to="/news">Crypto News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="btn-group">
          {!connectedAccount ? (
            <button className="btn" onClick={connectWallet}>
              <Link style={{ color: "white" }} to="/">
                Connect Wallet
              </Link>
            </button>
          ) : (
            <button className="btn" onClick={handleLogout}>
              <Link style={{ color: "white" }} to="/">
                Disconnect
              </Link>
            </button>
          )}
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar