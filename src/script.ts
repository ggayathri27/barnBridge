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

import * as url from './api/url_data';
import { getArbitrumData, getOptimisticData,getAvalancheData,getBSCData,getEthereumData, getPolygonData } from "./services/networkData";


console.log(url);

enum ChainID{
    ethereum = 1,
    optimistic = 10,
    bsc = 56,
    polygon = 137,
    arbitrum = 42161,
    avalanche = 43114
}
console.log(ChainID);
console.log("Ethereum Data: " );
console.log(getEthereumData());
//console.log(" Optimistic Data:" +getOptimisticData());
//console.log(" BSC Data:" +getBSCData);
//console.log("Polygon Data :" +getPolygonData);
//console.log("Arbrtrium Data: " +getArbitrumData());
//console.log("Avalance Data:" +getAvalancheData());


