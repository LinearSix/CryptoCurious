console.log(`coin`);

document.addEventListener('DOMContentLoaded', function() {

    // COIN MARKET CAP API
    // endpoint overview
    // https://pro.coinmarketcap.com/api/v1#section/Endpoint-Overview
    // include in header
    // X-CMC_PRO_API_KEY: 00ca39a2-10a7-4617-8eef-897fa860bd8b
    // Example API call
    // https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest
    // https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?sort=market_cap&start=0&limit=10&cryptocurrency_type=tokens&convert=USD,BTC

    // let headerCMC = new Headers({
    //     'Content-Type': 'text/plain',
    //     'Access-Control-Allow-Origin': '*',
    //     'X-CMC_PRO_API_KEY': '00ca39a2-10a7-4617-8eef-897fa860bd8b'
    //   });

    // fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`, { headers: headerCMC })
    //   .then(response => response.json())
    //   .then( (data) => {
    //     console.log(data);
    // });

    // COINAPI.IO
    // https://docs.coinapi.io/#introduction
    // X-CoinAPI-Key: 345FCF08-5D2C-432A-8FA1-7B4972E7FD53
    // Plan name: Free
    // https://rest.coinapi.io/

    // TEST OBJECT FOR OFFLINE TESTING
    const testData = [
        {"name": "BitCoin", "exchange_id": "000001"},
        {"name": "Binance", "exchange_id": "000002"},
        {"name": "GDAX", "exchange_id": "000003"},
        {"name": "Bitstamp Ltd.", "exchange_id": "000004"},
        {"name": "OKCoin CNY", "exchange_id": "000005"},
        {"name": "Bittrex", "exchange_id": "000006"},
        {"name": "POLONIEX", "exchange_id": "000007"},
        {"name": "Bitfinex", "exchange_id": "000008"},
        {"name": "Kraken", "exchange_id": "000009"},
        {"name": "Huobi Pro", "exchange_id": "000010"},
    ]

    // I DON'T THINK THIS IS ACTUALLY DOING ANYTHING
    let headerCoinApi = new Headers({
        'X-CoinAPI-Key': '345FCF08-5D2C-432A-8FA1-7B4972E7FD53',
        'Accept': 'application/json',
        'Accept-Encoding': 'deflate, gzip'
    });

    let selectExchange = document.getElementById(`selectMain`);
    // console.log(selectExchange);
    
    // COMMENT OUT NEXT FOUR LINES FOR OFFLINE TESTING
    // fetch("https://cors-anywhere.herokuapp.com/https://rest.coinapi.io/v1/exchanges?apikey=345FCF08-5D2C-432A-8FA1-7B4972E7FD53")
    // .then(response => response.json())
    // .then( (data) => {
        // console.log(data);
        let coinObjs = testData; //data;
        let divScroll = document.getElementById(`middleRight`);
        let divThumbColor;

        for (let coinObj in coinObjs) {
            // POPULATE SELECT OPTIONS
            console.log(coinObjs[coinObj]);
            let exchangeName = coinObjs[coinObj].name;
            let exchangeId = coinObjs[coinObj].exchange_id;
            // console.log(exchangeName)
            let selectOption = document.createElement(`option`);
            selectOption.textContent = (`${exchangeName}`);
            selectOption.value = (`${exchangeId}`);
            selectExchange.appendChild(selectOption);

            // POPULATE THUMBNAILS
            let divThumb = document.createElement(`div`);
            divThumb.className = (`divThumb`);
            divThumb.textContent = (`${exchangeName}`);
            // divThumbColor = `Coin ${i}`;
            divThumb.style.background = (`#${intToRGB(hashCode(exchangeName))}`);
            console.log(divThumbColor);
            divScroll.appendChild(divThumb);
            
            // COLOR GENERATOR
            function hashCode(str) { // java String#hashCode
                let hash = 0;
                for (let i = 0; i < str.length; i++) {
                    hash = str.charCodeAt(i) + ((hash << 5) - hash);
                }
                return hash;
            } 
            function intToRGB(i){
                let c = (i & 0x00FFFFFF)
                .toString(16)
                .toUpperCase();
                
                return "00000".substring(0, 6 - c.length) + c;
            };
        };
    // }); // COMMENT OUT FOR OFFLINE TESTING
});

// python -m SimpleHTTPServer
