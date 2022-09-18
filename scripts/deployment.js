async function main() {
  const dessayaddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  const accounts = await ethers.getSigners()
  const signer = accounts[0]
  const Dessay = await ethers.getContractFactory("Dessay")
  const dessayContract = new ethers.Contract(
    dessayaddress,
    Dessay.interface,
    signer
  )
  const balanceBN = await dessayContract.getProfile(signer.address)
  const balance = balanceBN.toString()
  console.log(balance)
}
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
