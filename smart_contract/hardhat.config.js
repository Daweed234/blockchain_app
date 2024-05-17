const { solidity } = require("ethereum-waffle")
// const { network } = require("hardhat")

require("@nomiclabs/hardhat-waffle")

module.export = {

  solidity:'0.8.19',
  network:{
    ropsten:{
      URL:'https://eth-mainnet.g.alchemy.com/v2/wUxenTVl9IqvHe-LEYcgxIngZZ03L86Y/getNFTs/?owner=vitalik.eth', 
    accounts:'0x29ee36015f5c7542E3696ecF387eB1aB42dD6d59',
    }
  }
}