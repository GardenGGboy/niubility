const {ethers} = require("ethers");

//同以太坊节点对话
const INFURA_ID =  '6dabe86435ca4668aebe8908da1a1f6c'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const address = '0x6B8c3E4D130e2A6A5E9F78BfE4bF178EB039700e'
//为了能够成功展现，必须要用异步函数进行包装
//将这个函数分给一个main变量
const main = async () => {
    //provider.getBalance功能在于它可以调用之后，查看自己还有多少的以太币
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}
//调用main
main()