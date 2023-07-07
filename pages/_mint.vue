<template>
    <div>
      <h1>Mint Your NFT</h1>
      <button @click="connectWallet">Connect Wallet</button>
      <button @click="mintNFT">Mint NFT</button>
    </div>
  </template>
  
  <script>
  import Web3 from 'web3';
  import contract from '@truffle/contract';
  import MyContract from '../contract/MyContract.json'; // replace this with your contract's JSON file
  
  export default {
    methods: {
      async connectWallet() {
        if (window.ethereum) {
          try {
            // Request account access
            await window.ethereum.enable();
          } catch (error) {
            console.error("User denied account access");
          }
        } else {
          console.error("Non-Ethereum browser detected. You should consider trying MetaMask!");
        }
      },
      async mintNFT(tokenURI) {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const myContract = contract(MyContract);
        myContract.setProvider(web3.currentProvider);
        const instance = await myContract.deployed();
        const enoughBalance = await this.checkBalance(accounts[0]);
        if (!enoughBalance) {
          alert('You do not have enough ETH to pay for the gas.');
          return;
        }
        await instance.mint(accounts[0], tokenURI, { from: accounts[0] });
      },
      async checkBalance(account) {
        const web3 = new Web3(window.ethereum);
        const balance = await web3.eth.getBalance(account);
        return web3.utils.toBN(balance).gte(web3.utils.toBN(web3.utils.toWei('0.01', 'ether')));
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
  
  button {
    display: block;
    width: 200px;
    height: 50px;
    margin: 20px auto;
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  