import React, { useState, useEffect } from "react";

export const TransactionContext = React.createContext();

const { ethereum } = window;

// const getEthereumContract = () => {
//   const provider = ethers.providers.Web3Provider(ethereum);
//   const signer = provider.getSigner();
//   const transactionContract = new ethers.Contract(
//     contractAddress,
//     contractABI,
//     signer
//   );
//   console.log({
//     provider,
//     signer,
//     transactionContract,
//   });
// };

export const TransactionProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setConnectedAccount(accounts[0]);
        //getAllTransactions();
      } else {
        console.log("No Accounts Found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setConnectedAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        connectedAccount,
        setConnectedAccount,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
