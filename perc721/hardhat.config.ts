import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-web3-v4";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "swisstronik",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${process.env.ACCOUNT_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: `ANY_STRING_WILL_DO`,
    customChains: [
      {
        network: "swisstronik",
        chainId: 1291,
        urls: {
          apiURL: "https://explorer-evm.testnet.swisstronik.com/api",
          browserURL: "https://explorer-evm.testnet.swisstronik.com",
        },
      },
    ],
  },
  sourcify: {
    enabled: true
  }
};


export default config;
// token address
// 0x4F8a3f71A797Cc8dE02542Ab9951a79c9EFCE33c
// tx hash
// 0x309da38b63080167ab5e350b96fa604c8a60b1e111972344cf3367b037ee23cd