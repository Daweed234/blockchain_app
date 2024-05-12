const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transaction");
  const transactions = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();

  console.log("Transactions deployed to: ", transactions.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    error.exit(1);
  }
};
runMain();
