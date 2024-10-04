const { json } = require('body-parser')
const fs = require('fs')
const filePath = './traderData.js'
 
const tradeData = ()=>{
    try{
        const data = fs.readFileSync(filePath,'utf-8')
        const {balance:loadedBalance,holding:loadedHolding}=JSON.parse(data)
        balance = loadedBalance;
        holding = loadedHolding;
    }catch(err){
        console.log("no previous record")
        balance = 100000
        holding = 0
    }
}
const saveTradeData=  ()=>{
    const data = JSON.stringify({balance,holding})
    fs.writeFileSync(filePath,data,'utf-8')
}


const createTrade = (decision, currentPrice) => {
    if (decision === 'BUY' && balance >= currentPrice) {
       
        holding++;
        balance -= currentPrice;
        saveTradeData()

    } else if (decision === 'SELL' && holding > 0) {
       
        holding -= 1
        balance += currentPrice;
        saveTradeData()
    }
    
   
}


 const getSum=(currentPrice)=>{
    console.log(holding,currentPrice,balance)
    return{

        balance,
        holding,
        profit:balance +holding*currentPrice
    }
}

tradeData()

module.exports={getSum,createTrade}