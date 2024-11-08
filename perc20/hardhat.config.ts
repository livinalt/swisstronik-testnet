import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-web3-v4";
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
  sourcify: {
    enabled: true
  }
};

export default config;
