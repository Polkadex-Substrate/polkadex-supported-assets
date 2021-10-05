#  Polkadex-AssetID

## Base Data
The data used for the fiat currencies follow the IS04217 standard are taken from [https://www.iso.org/iso-4217-currency-codes.html](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/amendments/lists/list_one.xls).
This .xls file is converted to json and is present in `/static/IS04217`. Cryptocurrency ids are taken from the [CoinMarketCap API](https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyMap),
where we use permanent [CoinMarketCap IDs](https://www.iso.org/iso-4217-currency-codes.html) as the base codes for generating polkadex AssetIDs.

## How Polkadex-AssetIDs are calculated
Each AssetID is a 64 bit integer where the lower 32 bits are reserved for fiat currency and upper 32 bits are reserved for cryptocurrency. Therefore the AssetID of all fiats currenices
are same as their ISO4217 codes representd in 64 bit format. For cryptocurrenices the asset id is calulated by the formula 2<sup>32</sup> + `CoinMarketCap ID`

##  How to build
- The static codes from IS04217 and CoinMarketCap is present in `/static` path
- To build to Polkadex-AssetIDs, run 
```
npm run build-assets
```
- this will create the list of all crypto and fiat currencies in the `/build` folder

## Filtering the list 
- The list of Asset IDs that are currently supported is present in `config.json`. Whenever a new Asset is supported it will be added to this list.
- To generate the Filtered List, run 
```
npm run generate-assets
```
- this will create the list of all supported crypto and fiat currencies in the `/dist` folder
