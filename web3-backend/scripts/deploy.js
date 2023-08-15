async function deployContract() {
  const deployedContract = await ethers.deployContract("FlipkartNFT");
  console.log("[main] Waiting for Deployment...");
  await deployedContract.waitForDeployment();
  const address = await deployedContract.getAddress();
  console.log("FlipkartNFT Contract Address:", address);
}

deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
