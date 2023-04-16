const { ethers } = require("ethers");

const INFURA_ID = '6dabe86435ca4668aebe8908da1a1f6c'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

//ether.js允许在这里用ERC20_ABI直接添加自己想要的function
const ERC20_ABI = [
     "function name() view returns (string)",
     "function symbol() view returns (string)",
     "function totalSupply() view returns (uint256)",
     "function balanceOf(address) view returns (uint)",
     
]

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
//将合约赋值给contract后续以备调用
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
      
    const name = await contract.name()
    const symbol = await contract.symbol()
    const totalSupply = await contract.totalSupply()
    console.log("name:",name)
    console.log("symbol:",symbol)

}
main()