const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const account1 = ''//sender
const account2 = ''//recipient

//从metamask中导入私钥
const privateKey1 = ''//sender private key
//定义钱包
const wallet = new ethers.Wallet(privateKey1,provider)
//有了钱包，收发者地址才能发起交易
const main = async () => {
    //Show account1 balance before
    const senderBalanceBefore = await provider.getBalance(account1)
    //Show account2 balance before
    const recieverBalanceBefore = await provider.getBalance(account2)
    
    //log进行输出
    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)
    
    //让这笔交易保存到tx变量中
    const tx = await wallet.sendTransaction({
        to:account2,
        //将Ether转换为wei
        value:ethers.utils.parseEther("0.025")
    })
    
    //wait Transaction to be mined
    //由于区块链特性，在交易完成后要等待一段时间上链后才可以查询到
    await tx.wait()
    console.log(tx)
    
    
    //Show account1 balance after
    const senderBalanceAfter = await provider.getBalance(account1)
     //Show account2 balance after
    const recieverBalanceAfter = await provider.getBalance(account2)

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)

}

main()