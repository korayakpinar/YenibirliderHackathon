require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
require('hardhat-gas-reporter');
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.API_KEY;
module.exports = {
  solidity: '0.8.8',
  defaultNetwork: 'matic',
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    matic: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [PRIVATE_KEY],
    },
  },
  gasReporter: {
    enabled: true,
    noColors: false,
    currency: 'USD',
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: 'AVAX',
  },
  etherscan: {
    apiKey: API_KEY,
  },
};
