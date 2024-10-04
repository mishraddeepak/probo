const express=require('express')
const router = express.Router()
const tradeController =require('../controllers/trade.controller')


router.get('/trade/percentage',tradeController.tradePercentage)
router.get('/trade/crossover',tradeController.tradeMovingCrossover)


module.exports = router