var Web3 = require('web3');
var web3 = new Web3("http://127.0.0.1:8445");
console.log("geth coinbase:");
web3.eth.getCoinbase().then(console.log);
