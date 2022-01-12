const hre = require("hardhat");
async function main() {
  let contractFactory = await hre.ethers.getContractFactory("TokenV2");
  const tokenContract = await contractFactory.deploy();   //CONTRACT INFO
  await tokenContract.deployed();
  console.log("Token deployed to:", tokenContract.address);

  contractFactory = await hre.ethers.getContractFactory("Airdropper");
  const airDropperContract = await contractFactory.deploy();   //CONTRACT INFO
  await airDropperContract.deployed();
  console.log("Airdropper deployed to:", airDropperContract.address);

  contractFactory = await hre.ethers.getContractFactory("CommunityCrafting");
  const communityContract = await contractFactory.deploy();   //CONTRACT INFO
  await communityContract.deployed();
  console.log("CommunityCrafting deployed to:", communityContract.address);

  contractFactory = await hre.ethers.getContractFactory("FarmV2");
  const farmContract = await contractFactory.deploy(tokenContract.address);   //CONTRACT INFO
  await farmContract.deployed();
  console.log("Farm deployed to:", farmContract.address);

  contractFactory = await hre.ethers.getContractFactory("Iron");
  const ironContract = await contractFactory.deploy();   //CONTRACT INFO
  await ironContract.deployed();
  console.log("Iron deployed to:", ironContract.address);

  contractFactory = await hre.ethers.getContractFactory("Axe");
  const axeContract = await contractFactory.deploy();   //CONTRACT INFO
  await axeContract.deployed();
  console.log("axe deployed to:", axeContract.address);

  contractFactory = await hre.ethers.getContractFactory("Armor");
  const ArmorContract = await contractFactory.deploy();   //CONTRACT INFO
  await ArmorContract.deployed();
  console.log("Armor deployed to:", ArmorContract.address);

  contractFactory = await hre.ethers.getContractFactory("IronPickAxe");
  const IronPickAxeContract = await contractFactory.deploy();   //CONTRACT INFO
  await IronPickAxeContract.deployed();
  console.log("IronPickAxe deployed to:", IronPickAxeContract.address);

  contractFactory = await hre.ethers.getContractFactory("PickAxe");
  const PickAxeContract = await contractFactory.deploy();   //CONTRACT INFO
  await PickAxeContract.deployed();
  console.log("PickAxe deployed to:", PickAxeContract.address);

  contractFactory = await hre.ethers.getContractFactory("Stone");
  const StoneContract = await contractFactory.deploy();   //CONTRACT INFO
  await StoneContract.deployed();
  console.log("Stone deployed to:", StoneContract.address);

  contractFactory = await hre.ethers.getContractFactory("StonePickAxe");
  const StonePickAxeContract = await contractFactory.deploy();   //CONTRACT INFO
  await StonePickAxeContract.deployed();
  console.log("StonePickAxe deployed to:", StonePickAxeContract.address);

  contractFactory = await hre.ethers.getContractFactory("Wood");
  const WoodContract = await contractFactory.deploy();   //CONTRACT INFO
  await WoodContract.deployed();
  console.log("Wood deployed to:", WoodContract.address);

  contractFactory = await hre.ethers.getContractFactory("ChickenCoop");
  const ChickenCoopContract = await contractFactory.deploy();   //CONTRACT INFO
  await ChickenCoopContract.deployed();
  console.log("ChickenCoop deployed to:", ChickenCoopContract.address);

  contractFactory = await hre.ethers.getContractFactory("GoldenEgg");
  const GoldenEggContract = await contractFactory.deploy();   //CONTRACT INFO
  await GoldenEggContract.deployed();
  console.log("GoldenEgg deployed to:", GoldenEggContract.address);

  contractFactory = await hre.ethers.getContractFactory("Egg");
  const eggContract = await contractFactory.deploy(farmContract.address);   //CONTRACT INFO
  await eggContract.deployed();
  console.log("Egg deployed to:", eggContract.address);

  contractFactory = await hre.ethers.getContractFactory("Chicken");
  const ChickenContract = await contractFactory.deploy(ChickenCoopContract.address, eggContract.address);   //CONTRACT INFO
  await ChickenContract.deployed();
  console.log("Chicken deployed to:", ChickenContract.address);

  contractFactory = await hre.ethers.getContractFactory("ChristmasTree");
  const ChristmasTreeContract = await contractFactory.deploy();   //CONTRACT INFO
  await ChristmasTreeContract.deployed();
  console.log("ChristmasTree deployed to:", ChristmasTreeContract.address);

  contractFactory = await hre.ethers.getContractFactory("Dog");
  const DogContract = await contractFactory.deploy();   //CONTRACT INFO
  await DogContract.deployed();
  console.log("Dog deployed to:", DogContract.address);

  contractFactory = await hre.ethers.getContractFactory("Gnome");
  const GnomeContract = await contractFactory.deploy();   //CONTRACT INFO
  await GnomeContract.deployed();
  console.log("Gnome deployed to:", GnomeContract.address);

  contractFactory = await hre.ethers.getContractFactory("Gold");
  const GoldContract = await contractFactory.deploy();   //CONTRACT INFO
  await GoldContract.deployed();
  console.log("Gold deployed to:", GoldContract.address);

  contractFactory = await hre.ethers.getContractFactory("SunflowerFarmersStatue");
  const StatueContract = await contractFactory.deploy();   //CONTRACT INFO
  await StatueContract.deployed();
  console.log("SunflowerFarmersStatue deployed to:", StatueContract.address);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
