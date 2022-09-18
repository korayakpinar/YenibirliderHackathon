const { ethers } = require("hardhat");
const { except, assert } = require("chai");

describe("Yazı Fonksiyonları", function () {
  let TokenContract, DessayContract, ourSigner;
  beforeEach(async function () {
    TokenFactory = await ethers.getContractFactory("DessayToken");
    TokenContract = await TokenFactory.deploy();
    await TokenContract.deployed();

    DessayFactory = await ethers.getContractFactory("Dessay");
    DessayContract = await DessayFactory.deploy(TokenContract.address);
    await DessayContract.deployed();

    ourSigner = await ethers.getSigner();
    DessayContract.connect(ourSigner);
  });

  it("Yazı ekleme ve çekme", async function () {
    header = "Header";
    IPFS = "IPFS";
    Topics = [
      ethers.BigNumber.from(1),
      ethers.BigNumber.from(2),
      ethers.BigNumber.from(3),
    ];
    await DessayContract.enterWriting(header, IPFS, Topics, 0);
    Yazi = await DessayContract.getWrites(ourSigner.address);
    assert.equal(Yazi[0][0], header);
    assert.equal(Yazi[0][1], IPFS);
    assert.equal(Yazi[0][2].toString(), Topics.toString());
  });
});

describe("Token Fonksiyonları", function () {
  let TokenContract;
  beforeEach(async function () {
    TokenFactory = await ethers.getContractFactory("DessayToken");
    TokenContract = await TokenFactory.deploy();
    await TokenContract.deployed();
    ourSigner = await ethers.getSigner();
    await TokenContract.connect(ourSigner);
  });

  it("User Power", async () => {
    output = await TokenContract.getUserPower(ourSigner.address);
    assert.equal(output, 0);
  });

  it("Staked Balance", async () => {
    output = await TokenContract.getStakedBalance(ourSigner.address);
    assert.equal(output, 0);
  });

  it("Stake time", async () => {
    output = await TokenContract.getStakeTime(ourSigner.address);
    assert.equal(output, 0);
  });

  it("Stake", async () => {
    await TokenContract.stakeToken(1);
    output = await TokenContract.getStakedBalance(ourSigner.address);
    assert.equal(output, 1);
  });

  it("Güncel User Power", async () => {
    await TokenContract.stakeToken(1);
    output = await TokenContract.getUserPower(ourSigner.address);
    assert.equal(output, 1);
  });
});
