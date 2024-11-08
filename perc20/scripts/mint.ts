import { abi } from "../artifacts/contracts/Swistar.sol/Swistar.json";
import { Web3 } from "web3";
import hre, { network } from "hardhat";
import { SwisstronikPlugin } from "@swisstronik/web3-plugin-swisstronik";

async function main() {

  const web3 = new Web3(hre.network.provider); 
  web3.registerPlugin(new SwisstronikPlugin("https://json-rpc.testnet.swisstronik.com/unencrypted"));

  const contractAddress = '0x894801D9fB0Dafb92a36951592Eb4720b535D816';

  // signer
  const from = await hre.web3.eth.getAccounts();
  const acct = from[0];

  console.log("Minting 100 tokens using account", acct);

  try {
    const contract = new hre.web3.eth.Contract(abi, contractAddress);
    console.log(contract);
    
    const mint100TokensTx = await contract.methods.mint();
    console.log("Minting 100 tokens...");
    console.log("Transaction Receipt: ", mint100TokensTx);
  }catch(error) { 
    console.log(error)
  }

}

// Using async/await pattern to handle errors properly
main().catch((error) => {
  console.error("Error in execution: ", error);
  process.exitCode = 1;
});
