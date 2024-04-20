const ethers = require('ethers');
const provider = new ethers.JsonRpcProvider(`https://polygon-amoy.g.alchemy.com/v2/mHvKsUwxN0a596cxV4jbV1Tk6kdwR85T`);

const queryBlockchain = async () => {

    const block = await provider.getBlockNumber();
    console.log(`The current block number is: ${block}`);

    const blockInfo = await provider.getBlock(block);
    console.log(blockInfo);

    const blockTransactions = await provider.getBlockWithTransactions(block);
    console.log(blockTransactions);

    const blockTransactionCount = await provider.getBlockTransactionCount(block);
    console.log(`The number of transactions in block ${block} is ${blockTransactionCount}`);


}