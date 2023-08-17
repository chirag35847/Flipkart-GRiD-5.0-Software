const loayalityTokenRewardAddress = "0x8cD7E7987FeB0dEF86a1420A8146CE3f1d51c10d";
const ecommerceAddress="0x7C859ea1Bc844977A445B980f2257624FE8eE607";
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function deployContract() {
  const deployedContract = await ethers.deployContract(
    "EcommerceBrandTokenReward",
    [loayalityTokenRewardAddress]
  );
  console.log("[main] Waiting for Deployment...");
  await deployedContract.waitForDeployment();
  const address = await deployedContract.getAddress();
  console.log("EcommerceBrandTokenReward Contract Address:", address);
  await sleep(30 * 1000);
  console.log("Verifying Ecommerce Contract on Given Network ...");
  //   Verify the Liquidity Locking Contract
  await hre.run("verify:verify", {
    contract: "contracts/Flipkart.sol:EcommerceBrandTokenReward",
    address: address,
    constructorArguments: [loayalityTokenRewardAddress],
  });
}

deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
