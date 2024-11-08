
import { ethers } from "hardhat";

async function main() {
    // Get the ContractFactory and Signers here.
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    // We get the contract to deploy
    const TokenContract = await ethers.getContractFactory("MyNft");
    // Deploy the contract and pass the initialOwner address
    const initialOwner = deployer.address;
    const NFTToken = await TokenContract.deploy(initialOwner);
    console.log("Non-Fungible Token Contract address:", NFTToken.target);
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

