"use strict";
/* const arbitrum =  fetch('https://prod-arbitrum.api.barnbridge.com/api/smartalpha/pools')
const ethereum = fetch('https://api-v2.barnbridge.com/api/smartalpha/pools')
const optimistic = fetch('https://prod-optimistic.api.barnbridge.com/api/smartalpha/pools')
const avalanche = fetch('https://prod-avalanche.api.barnbridge.com/api/smartalpha/pools')
const bsc = fetch('https://prod-bsc.api.barnbridge.com/api/smartalpha/pools')

Promise.all([ arbitrum,
    ethereum,
    optimistic,
    avalanche,
    bsc
]).then(function (responses){
    return Promise.all(responses.map(async function (response){
        const data = await response.json();
        return data;
    }));
}).then(function(data){
    console.log(data);
}).catch(function (error){
    console.log(error);
}); */
exports.__esModule = true;
var url = require("./api/url_data");
console.log(url);
