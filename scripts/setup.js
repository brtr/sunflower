const hre = require("hardhat");
const { AXE_ADDRESS, ARMOR_ADDRESS, IRON_ADDRESS, TOKEN_ADDRESS, FARM_ADDRESS, PICKAXE_ADDRESS, STONE_ADDRESS, STONE_PICKAXE_ADDRESS, WOOD_ADDRESS, AIR_DROPPER_ADDRESS, EGG_ADDRESS, CHICKEN_COOP_ADDRESS,
  CHRISTMAS_TREE_ADDRESS, COMMUNITY_CRAFTING_ADDRESS, DOG_ADDRESS, GNOME_ADDRESS, GOLD_ADDRESS, GOLDEN_EGG_ADDRESS, CHICKEN_ADDRESS, IRON_PICKAXE_ADDRESS, STATUE_ADDRESS, OWNER_ADDRESS } = process.env;

const main = async () => {
  let contractFactory = await hre.ethers.getContractFactory('FarmV2');
  const farmContract = contractFactory.attach(FARM_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('Axe');
  const axeContract = contractFactory.attach(AXE_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('Armor');
  const armorContract = contractFactory.attach(ARMOR_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('Iron');
  const ironContract = contractFactory.attach(IRON_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('IronPickAxe');
  const ironPickAxeContract = contractFactory.attach(IRON_PICKAXE_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('TokenV2');
  const tokenContract = contractFactory.attach(TOKEN_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('PickAxe');
  const pickAxeContract = contractFactory.attach(PICKAXE_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('Stone');
  const stoneContract = contractFactory.attach(STONE_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('StonePickAxe');
  const stonePickAxeContract = contractFactory.attach(STONE_PICKAXE_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('Wood');
  const woodContract = contractFactory.attach(WOOD_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('Chicken');
  const chickenContract = contractFactory.attach(CHICKEN_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('Egg');
  const eggContract = contractFactory.attach(EGG_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('ChickenCoop');
  const chickenCoopContract = contractFactory.attach(CHICKEN_COOP_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('ChristmasTree');
  const christmasTreeContract = contractFactory.attach(CHRISTMAS_TREE_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('Dog');
  const dogContract = contractFactory.attach(DOG_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('Gnome');
  const gnomeCoopContract = contractFactory.attach(GNOME_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('Gold');
  const goldContract = contractFactory.attach(GOLD_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('GoldenEgg');
  const goldenEggContract = contractFactory.attach(GOLDEN_EGG_ADDRESS);

  contractFactory = await hre.ethers.getContractFactory('SunflowerFarmersStatue');
  const statueContract = contractFactory.attach(STATUE_ADDRESS);

  let txn = await tokenContract.mint(OWNER_ADDRESS, "100000000000000000000000");
  txn.wait();
  txn = await tokenContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set token contract success")

  txn = await axeContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set axe contract success");

  txn = await armorContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set armor contract success")

  txn = await ironContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set iron contract success")

  txn = await ironPickAxeContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set iron pickaxe contract success")

  txn = await pickAxeContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set pickaxe contract success")

  txn = await stoneContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set stone contract success")

  txn = await stonePickAxeContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set stone pickaxe contract success")

  txn = await woodContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set wood contract success")

  txn = await eggContract.passMinterRole(CHICKEN_ADDRESS);
  txn.wait();
  console.log("set egg contract success")

  txn = await chickenContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set chicken contract success")

  txn = await chickenCoopContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set chicken coop contract success")

  txn = await christmasTreeContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set christmas tree contract success")

  txn = await dogContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set dog contract success")

  txn = await gnomeCoopContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set gnome contract success")

  txn = await goldContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set gold contract success")

  txn = await goldenEggContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set golden egg contract success")

  txn = await statueContract.passMinterRole(FARM_ADDRESS);
  txn.wait();
  console.log("set statue contract success")

  txn = await farmContract.createRecipe(AXE_ADDRESS, [[TOKEN_ADDRESS, 1]]);
  txn.wait();
  txn = await farmContract.createResource(WOOD_ADDRESS, AXE_ADDRESS);
  txn.wait();
  txn = await farmContract.createRecipe(PICKAXE_ADDRESS, [[TOKEN_ADDRESS, 1]]);
  txn.wait();
  txn = await farmContract.createResource(STONE_ADDRESS, PICKAXE_ADDRESS);
  txn.wait();
  txn = await farmContract.createRecipe(STONE_PICKAXE_ADDRESS, [[TOKEN_ADDRESS, 1]]);
  txn.wait();
  txn = await farmContract.createResource(IRON_ADDRESS, STONE_PICKAXE_ADDRESS);
  txn.wait();
  txn = await farmContract.createRecipe(IRON_PICKAXE_ADDRESS, [[TOKEN_ADDRESS, 1]]);
  txn.wait();
  txn = await farmContract.createResource(GOLD_ADDRESS, IRON_PICKAXE_ADDRESS);
  txn.wait();
  txn = await farmContract.createRecipe(CHICKEN_ADDRESS, [[TOKEN_ADDRESS, 1]]);
  txn.wait();
  txn = await farmContract.createResource(EGG_ADDRESS, CHICKEN_ADDRESS);
  txn.wait();
  console.log("set farm contract success");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();