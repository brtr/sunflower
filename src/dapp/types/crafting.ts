import Token from "../../abis/Token.json";
import Farm from "../../abis/Farm.json";
import Axe from "../../abis/Axe.json";
import Wood from "../../abis/Wood.json";
import Pickaxe from "../../abis/Pickaxe.json";
import StonePickaxe from "../../abis/StonePickaxe.json";
import IronPickaxe from "../../abis/IronPickaxe.json";
import Stone from "../../abis/Stone.json";
import Gold from "../../abis/Gold.json";
import Egg from "../../abis/Egg.json";
import Chicken from "../../abis/Chicken.json";
import Iron from "../../abis/Iron.json";
import Statue from "../../abis/Statue.json";
import ChristmasTree from "../../abis/ChristmasTree.json";
import Scarecrow from "../../abis/Scarecrow.json";
import PotatoStatue from "../../abis/PotatoStatue.json";
import FarmCat from "../../abis/FarmCat.json";
import FarmDog from "../../abis/FarmDog.json";
import Gnome from "../../abis/Gnome.json";

import pickaxe from "../images/ui/pickaxe.png";
import woodPickaxe from "../images/ui/wood_pickaxe.png";
import ironPickaxe from "../images/ui/iron_pickaxe.png";
import axe from "../images/ui/axe.png";
import hammer from "../images/ui/hammer.png";
import rod from "../images/ui/rod.png";
import sword from "../images/ui/sword.png";
import wood from "../images/ui/wood.png";
import iron from "../images/ui/ore.png";
import goldOre from "../images/ui/gold_ore.png";
import stone from "../images/ui/rock.png";
import gnome from "../images/ui/gnome.png";
import chicken from "../images/ui/chicken.png";
import egg from "../images/ui/egg.png";
import chickenCoop from "../images/ui/chicken_coop.png";
import goldEgg from "../images/ui/gold_egg.png";
import coin from "../images/ui/icon.png";
import statue from "../images/ui/sunflower_statue.png";
import potatoStatue from "../images/ui/potato_statue.png";
import christmasTree from "../images/ui/christmas_tree.png";
import scarecrow from "../images/ui/scarecrow.png";
import farmCat from "../images/ui/farm_cat.png";
import dog from "../images/ui/dog.png";
import wheatSeed from "../images/wheat/seed.png";
import wheat from "../images/wheat/plant.png";
import flour from "../images/wheat/flour.png";

export interface Ingredient {
  name:
    | "Wood"
    | "Stone"
    | "$SFF"
    | "Iron"
    | "Gold"
    | "Egg"
    | "Wheat"
    | "MATIC";
  image: any;
  amount: number;
}

export interface Recipe extends Item {
  ingredients: Ingredient[];
}

export interface Item {
  name:
    | "Axe"
    | "Wood pickaxe"
    | "Stone Pickaxe"
    | "Iron Pickaxe"
    | "Fishing rod"
    | "Hammer"
    | "Stone"
    | "Wood"
    | "Iron"
    | "Gold"
    | "Egg"
    | "Chicken"
    | "Sword"
    | "Chicken coop"
    | "Sunflower Statue"
    | "OG Potato Statue"
    | "Christmas Tree"
    | "Golden Egg"
    | "Scarecrow"
    | "Farm Cat"
    | "Farm Dog"
    | "Gnome"
    | "Wheat Seed"
    | "Flour";
  description: string;
  address: string;
  image: any;
  type: "ERC20" | "NFT";
  communityMember?: {
    twitterName?: string;
    twitterLink?: string;
    discordName?: string;
  };
  isLocked?: boolean;
  supply?: number;
  limit?: number;
  farmLevel?: number;
  abi?: any;
  openSeaLink?: string;
}

export const recipes: Recipe[] = [
  {
    name: "Axe",
    description: "Used for cutting and collecting wood",
    image: axe,
    type: "ERC20",
    address: "0xa631022A1f6897c1527187AD764E0b8368612aC2",
    ingredients: [
      {
        name: "$SFF",
        amount: 1,
        image: coin,
      },
    ],
    abi: Axe,
  },
  {
    name: "Wood pickaxe",
    description: "Used for mining and collecting stone",
    image: woodPickaxe,
    type: "ERC20",
    address: "0xBF5ad5818556e95119606e4DED84feAB6EF8A9B0",
    ingredients: [
      {
        name: "Wood",
        amount: 5,
        image: wood,
      },
      {
        name: "$SFF",
        amount: 2,
        image: coin,
      },
    ],
    abi: Pickaxe,
  },
  {
    name: "Stone Pickaxe",
    abi: StonePickaxe,
    description: "Used for mining and collecting iron ore",
    image: pickaxe,
    type: "ERC20",
    address: "0x918A4e71C9d4928a0cE71086b7d9FaA610de7390",
    ingredients: [
      {
        name: "Wood",
        amount: 5,
        image: wood,
      },
      {
        name: "Stone",
        amount: 5,
        image: stone,
      },
      {
        name: "$SFF",
        amount: 2,
        image: coin,
      },
    ],
  },
  {
    name: "Iron Pickaxe",
    abi: IronPickaxe,
    description: "Used for mining and collecting gold",
    image: ironPickaxe,
    type: "ERC20",
    address: "0xC5bF8690AB86E4CeaEb2EB0FB35d273579Da1D23",
    ingredients: [
      {
        name: "Wood",
        amount: 10,
        image: wood,
      },
      {
        name: "Iron",
        amount: 10,
        image: iron,
      },
      {
        name: "$SFF",
        amount: 10,
        image: coin,
      },
    ],
  },
  {
    name: "Hammer",

    description: "Used for building barns, coops & other structures",
    image: hammer,
    type: "ERC20",
    address: "TODO",
    isLocked: true,
    ingredients: [
      {
        name: "Wood",
        amount: 5,
        image: wood,
      },
      {
        name: "$SFF",
        amount: 10,
        image: coin,
      },
    ],
  },
  {
    name: "Fishing rod",
    description: "Used for fishing and gathering fish",
    image: rod,
    type: "ERC20",
    address: "TODO",
    isLocked: true,
    ingredients: [
      {
        name: "Wood",
        amount: 5,
        image: wood,
      },
      {
        name: "$SFF",
        amount: 10,
        image: coin,
      },
    ],
  },
  {
    name: "Sword",
    description: "Used for fighting monsters and collecting rewards",
    image: sword,
    type: "ERC20",
    address: "TODO",
    isLocked: true,
    ingredients: [
      {
        name: "Wood",
        amount: 5,
        image: wood,
      },
      {
        name: "$SFF",
        amount: 10,
        image: coin,
      },
    ],
  },
  {
    name: "Sunflower Statue",
    abi: Statue,
    description: "A symbol of the holy token",
    image: statue,
    type: "NFT",
    address: "0x9e29Aa04DBfAf440bB4357D75899a0DB6BA761Dd",
    ingredients: [
      {
        name: "$SFF",
        amount: 50,
        image: coin,
      },
      {
        name: "Stone",
        amount: 50,
        image: stone,
      },
      {
        name: "Iron",
        amount: 50,
        image: iron,
      },
    ],
    supply: 1000,
    openSeaLink: "https://opensea.io/collection/sunflower-farmers-statue",
  },
  {
    name: "Scarecrow",
    description: "Grow wheat (coming soon) 3x faster.",
    image: scarecrow,
    type: "NFT",
    address: "TODO",
    isLocked: true,
    ingredients: [
      {
        name: "$SFF",
        amount: 10,
        image: coin,
      },
      {
        name: "Wood",
        amount: 50,
        image: wood,
      },
    ],
    openSeaLink:
      "https://opensea.io/collection/sunflower-farmers-scarecrow",
    supply: 5000,
  },
  {
    name: "Christmas Tree",
    abi: ChristmasTree,
    description: "A christmas tree for the holidays",
    image: christmasTree,
    type: "NFT",
    address: "0x1dc4520AF15e528eC00dd5Cd29127178684602e1",
    openSeaLink:
      "https://opensea.io/collection/sunflower-farmers-christmas-tree",
    ingredients: [
      {
        name: "$SFF",
        amount: 300,
        image: coin,
      },
      {
        name: "Wood",
        amount: 500,
        image: wood,
      },
    ],
    supply: 50,
  },
  {
    name: "Chicken coop",
    abi: ChristmasTree,
    description: "Produce eggs 3x as fast with this stylish coop",
    image: chickenCoop,
    type: "NFT",
    address: "0xb3244a7bfFc518973847A4bcc82793B336526c83",
    ingredients: [
      {
        name: "$SFF",
        amount: 200,
        image: coin,
      },
      {
        name: "Wood",
        amount: 300,
        image: wood,
      },
      {
        name: "Gold",
        amount: 25,
        image: goldOre,
      },
    ],
    supply: 2000,
    openSeaLink:
      "https://opensea.io/collection/sunflower-farmers-chicken-coop",
  },
  {
    name: "Chicken",
    abi: Chicken,
    description: "An animal used to produce eggs",
    image: chicken,
    type: "ERC20",
    address: "0x903a629e787265E4536485C0602Cbb6A3ECec4b0",
    ingredients: [
      {
        name: "$SFF",
        amount: 10,
        image: coin,
      },
    ],
  },
  {
    name: "Golden Egg",
    abi: Chicken,
    description: "Will the golden egg bring you happiness?",
    image: goldEgg,
    type: "NFT",
    address: "0xe2656ed9246d03bD1c3bF1CFD712bf67a0031E7E",
    limit: 300,
    supply: 300,
    openSeaLink:
      "https://opensea.io/collection/sunflower-farmers-golden-egg",
    ingredients: [
      {
        name: "Gold",
        amount: 50,
        image: goldOre,
      },
      {
        name: "Egg",
        amount: 150,
        image: egg,
      },
    ],
  },
  {
    name: "OG Potato Statue",
    description: "Flex your status as an original potato hustler",
    image: potatoStatue,
    type: "NFT",
    address: "TODO",
    isLocked: true,
    ingredients: [
      {
        name: "Stone",
        amount: 5,
        image: stone,
      },
    ],
    supply: 10000,
    openSeaLink:
      "https://opensea.io/collection/sunflower-farmers-og-potato-statue",
  },
  {
    name: "Farm Cat",
    description: "A cat named Victoria that helps keep rats away.",
    image: farmCat,
    type: "NFT",
    address: "TODO",
    isLocked: true,
    ingredients: [
      {
        name: "Gold",
        amount: 5,
        image: goldOre,
      },
    ],
    farmLevel: 5,
    supply: 75,
    openSeaLink: "https://opensea.io/collection/sunflower-farmers-cat",
  },
  {
    name: "Farm Dog",
    abi: FarmDog,
    description: "Herd sheep 4x faster with Chonker the Dog.",
    image: dog,
    type: "NFT",
    address: "0x42995285f2F7162800f6c3eB2cd8cF3A618Abb7d",
    ingredients: [
      {
        name: "$SFF",
        amount: 30,
        image: coin,
      },
    ],
    communityMember: {
      discordName: "bumpkinbuilder",
      twitterName: "@sunflowerfarmz",
      twitterLink: "https://twitter.com/sunflowerfarmz",
    },
    supply: 500,
    openSeaLink: "https://opensea.io/collection/sunflower-farmers-dog",
  },
  {
    name: "Gnome",
    abi: Gnome,
    description: "Influence the weather with this magic gnome",
    image: gnome,
    type: "NFT",
    address: "0x1eb70463F40F34865f89eC2d4b57b08F41FD4e99",
    ingredients: [
      {
        name: "$SFF",
        amount: 5,
        image: coin,
      },
    ],
    communityMember: {
      discordName: "firstmover",
    },
    supply: 1000,
    openSeaLink: "https://opensea.io/collection/sunflower-farmers-gnome",
  },
  {
    name: "Wheat Seed",
    description: "Used for planting wheat",
    image: wheatSeed,
    type: "ERC20",
    address: "TODO",
    isLocked: true,
    ingredients: [
      {
        name: "$SFF",
        amount: 0.1,
        image: coin,
      },
    ],
  },
  {
    name: "Flour",
    description: "Used in recipes",
    image: flour,
    type: "ERC20",
    address: "TODO",
    isLocked: true,
    ingredients: [
      {
        name: "Wheat",
        amount: 1,
        image: wheat,
      },
    ],
  },
];

export const items: Item[] = [
  ...recipes,
  {
    name: "Stone",
    abi: Stone,
    description: "A natural resource in Sunflower Land used for crafting",
    image: stone,
    type: "ERC20",
    address: "0x14F742F3E8526c48Da839F7F42081CCA7dcfFA4A",
  },
  {
    name: "Wood",
    abi: Wood,
    description:
      "A bountiful resource in Sunflower Land used for crafting",
    image: wood,
    type: "ERC20",
    address: "0x4cACA85250bEf900b3069985eEF63f9ca77314FA",
  },

  {
    name: "Iron",
    abi: Iron,
    description:
      "A bountiful resource in Sunflower Land used for crafting",
    image: iron,
    type: "ERC20",
    address: "0x622e74A2cD527796062E988fFE517c33Ac61F987",
  },
  {
    name: "Gold",
    abi: Gold,
    description: "A scarce resource in Sunflower Land used for crafting",
    image: goldOre,
    type: "ERC20",
    address: "0x0E32ED09FbDc9e871D7bDBbAD300a5eA5122610a",
  },
  {
    name: "Egg",
    abi: Egg,
    description:
      "A bountiful resource in Sunflower Land used for crafting",
    image: egg,
    type: "ERC20",
    address: "0x9C470A9622e49080922822C4D7981169aC3292B0",
  },
];

export type Inventory = Record<ItemName, number>;

export const DEFAULT_INVENTORY: Inventory = {
  Wood: 0,
  Stone: 0,
  Axe: 0,
  "Wood pickaxe": 0,
  "Stone Pickaxe": 0,
  "Iron Pickaxe": 0,
  Iron: 0,
  Gold: 0,
  Chicken: 0,
  Egg: 0,
  "OG Potato Statue": 0,
  "Sunflower Statue": 0,
  "Fishing rod": 0,
  "Chicken coop": 0,
  Hammer: 0,
  Sword: 0,
  Scarecrow: 0,
  "Golden Egg": 0,
  "Christmas Tree": 0,
  "Farm Cat": 0,
  "Farm Dog": 0,
  Gnome: 0,
  "Wheat Seed": 0,
  Flour: 0,
};
export type ItemName = Item["name"];
