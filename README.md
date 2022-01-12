# 发布流程

## 发布准备

复制env_sample到.env并修改各个参数, 然后

```
npm install
```

## 发布合约

```
npx hardhat run scripts/deploy.js --network rinkeby
```

## 验证合约 (国内网络可能会超时，在服务器上验证过没问题)

```
npx hardhat verify --network rinkeby 合约地址
```

## 配置合约 (默认会先mint 10w个token到owner地址, 可以修改)

```
npx hardhat run scripts/setup.js --network rinkeby
```

## 前端服务器地址

44.192.130.77

## 安装node环境

```
npm install
```

## 修改前端页面合约地址

主要是这两个文件，把地址改成正确的地址, 还有CHAIN ID改成合约发布的chain id
./src/dapp/Blockchain.ts
./src/dapp/types/crafting.ts

## 启动node

```
yarn start
```

