 // percentage trading strategy
 const changePercentage=(currentPrice,oldPrice,buyAt=-2,sellAt=3)=>{
// check the % change in the price to make decision further
const change=((currentPrice-oldPrice)/oldPrice)*100
if(change<=buyAt){
    return 'BUY'
}
if(change>=sellAt){
    return 'SELL'
}
return 'HOLD'
}

const average = (arr)=>{
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
// moving average strategy
 const averageCrossover=(prices)=>{
    // shortAv- average of last three prices called short term average
    const shortAv = average(prices.slice(-3))
    console.log("..",shortAv)
    // longAv- overall average of all prices
    const longAv = average(prices)
    console.log("..",longAv)
    if(shortAv>longAv){
        return 'BUY' 
    }else{
        return 'SELL'  
    }
 }


 module.exports = {averageCrossover,changePercentage}
