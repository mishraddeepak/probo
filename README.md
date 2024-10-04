
# Trading Bot

## Overview
This trading bot simulates a basic trading algorithm for a hypothetical stock market using Node.js. The bot continuously monitors stock price changes and executes trades based on predefined rules. It tracks its profit/loss and provides performance metrics.

## Features
- Simulates real-time stock trading based on mock data.
- Implements a basic trading strategy based on percentage changes and Moving Average Crossover in stock prices.
- Tracks the bot’s balance, holdings, and overall profit/loss.

## Requirements
- Node.js (v14 or higher)
- npm (Node package manager)


## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/trading-bot.git
   cd trading-bot
2. **Install Dependencies:**
    ```bash
   npm install express
3. **Create a Mock Data File:**



## Running Application

To run Application, run the following command

```bash
  node index.js
```


## API Reference

#### Make Trade based upon the Percentage change in current Price w.r.t. Old price.

```http
  GET /api/trade/percentage
```

#### Make trade Based upon Moving Average CrossOver analogy.

```http
   GET /api/trade/crossover
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`


## Tech Stack
**Server:** Node, Express

