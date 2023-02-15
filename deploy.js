const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://celo-mainnet.infura.io/v3/466043377db54724a447881dbf04c157'));
let blockNumber;
web3.eth.getBlockNumber().then(number => {
    blockNumber = number;
    console.log(`Block number: ${blockNumber}`);
})
let contractCount = 0;
for (let i = 0; i <= blockNumber; i++) {
    web3.eth.getBlock(i).then(block => {
        if (block.transactions[0].to == null) {
            contractCount += 1;
            console.log(`Contract #${contractCount}: block number ${i}`);
        }
    })
}