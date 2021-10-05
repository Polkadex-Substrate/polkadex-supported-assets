const cryptoList = require('./build/cryptoList.json');
const fiatList = require('./build/ISO4217.json');
const supported = require("./config.json")["supported"]
const fs = require('fs')

const supportedSet = new Set(supported);

const fiats = fiatList.map(coin => {
    return {
        "NAME": coin.NAME,
        "ALPHABETIC": coin.ALPHABETIC,
        "CODE": coin.CODE
    }
})

const cryptos = cryptoList.map(coin => {
    return {
        "NAME": coin.NAME,
        "ALPHABETIC": coin.ALPHABETIC,
        "CODE": coin.CODE
    }
})
const supportedCryptoSet = new Set(cryptos.filter((coin) => {
    return supportedSet.has(coin.CODE)
}))
const supportedFiatSet = new Set(fiats.filter((coin) => {
    return supportedSet.has(coin.CODE)
}))


let supportedList = new Set(
    [...supportedCryptoSet, ...supportedFiatSet]
        .map(elem => JSON.stringify(elem))
)
supportedList = [...supportedList].map(elem => JSON.parse(elem));
console.log(supportedList)
fs.writeFileSync('./dist/SupportedAssets.json', JSON.stringify(supportedList));
fs.writeFileSync('./dist/AllAssets.json', JSON.stringify([...fiats, ...cryptos]));

