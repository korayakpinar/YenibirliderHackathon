const { ethers } = require('hardhat');

async function main() {
  ethers.getContractAt;

  console.log('-------Deploying-------');
  const TokenFactory = await ethers.getContractFactory('DessayToken');
  const Token = await TokenFactory.deploy();
  const DessayFactory = await ethers.getContractFactory('Dessay');
  const dessay = await DessayFactory.deploy(Token.address);
  await dessay.deployed();
  console.log('-------Deployed-------');
  console.log(`Ana kontrat adresi ${dessay.address}`);
  console.log(`Token adresi ${Token.address}`);

  /*const header = "Bu bir testtir";
  const ipfs = "ipfs://deublockchain";
  await dessay.enterWriting(header, ipfs);
  const yazilar = await dessay.getWrites();
  console.log(`Mevcut yazilar \n${yazilar}`);*/
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
