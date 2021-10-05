const cryptoData = require('./static/CoinMarketCap/Coinmarketcap_List.json')["data"];
const fiatData = require('./static/ISO4217/ISO_4217');
const fs = require('fs')

let cryptoList = cryptoData.map((item, idx) => {
    return {
        NAME: item["name"],
        ALPHABETIC: item["symbol"],
        COIN_MARKET_CAP_ID: item["id"],
        CODE: Number(Math.pow(2, 32) + Number(item["id"]))
    }
})
let fiatsList = fiatData.map(item => {
    return {
        COUNTRY: item["COUNTRY"],
        NAME: item["CURRENCY"],
        ALPHABETIC: item["ALPHABETIC"],
        CODE: parseInt(item["CODE"]),
        MINOR: Number(item["MINOR"]),
    }
})
fs.writeFile('./build/cryptoList.json', JSON.stringify(cryptoList), err => {
    if (err) {
        console.error(err)
        return
    }
    console.log("written successfully");
    console.log("crypto list length: ",cryptoList.length)
})
fs.writeFile('./build/ISO4217.json', JSON.stringify(fiatsList), err => {
    if (err) {
        console.error(err)
        return
    }
    console.log("written successfully");
    console.log("fiats list length: ", fiatsList.length)
})
const allAssets = [...fiatsList, ...cryptoList]
fs.writeFile('./build/AllAssets.json', JSON.stringify(allAssets), err => {
    if (err) {
        console.error(err)
        return
    }
    console.log("written successfully");
    console.log("all assets length: ", allAssets.length)
})