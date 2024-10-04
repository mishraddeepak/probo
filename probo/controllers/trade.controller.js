
const stockPrices = require('../Data')
const { changePercentage, averageCrossover } = require('../tradingStrategy')
const { createTrade, getSum } = require('../P&Ltracker')

const tradeController = {
    tradePercentage: (req, res) => {

        const currentPrice = stockPrices['ONGC'][Math.floor(Math.random() * 10)]
        console.log(currentPrice)

        //Method 1

        // 1 Percentage strategy for making trades
        const decision = changePercentage(currentPrice, stockPrices['ONGC'][Math.floor(Math.random() * 10) - 1])

        console.log(currentPrice, decision)
        // making trade based on the decision and current price
        createTrade(decision, currentPrice)


        res.json({ decision, summary: getSum(currentPrice) })
    },
    tradeMovingCrossover: (req, res) => {

        const currentPrice = stockPrices['ONGC'][Math.floor(Math.random() * 10)]
        console.log(currentPrice)
        // 2 moving average crossover strategi to make decision
        const decision = averageCrossover(stockPrices['ONGC'])
        console.log(currentPrice, decision)
        // making trade based on the decision and current price
        createTrade(decision, currentPrice)


        res.json({ decision, summary: getSum(currentPrice) })
    }
}


module.exports = tradeController