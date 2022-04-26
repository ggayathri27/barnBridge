import { barnBridgeData } from "../interfaces";
import * as url from "../api/url_data";
import axios, {AxiosResponse} from 'axios';

enum ChainID {
  ethereum = 1,
  optimistic = 10,
  bsc = 56,
  polygon = 137,
  arbitrum = 42161,
  avalanche = 43114
}
console.log(ChainID);

export function getEthereumData() : void {
  axios.get(url.ethereum)
  .then((response : any) =>{ console.log(response.data);
   
  })
  .catch((error: any)  => { console.log(error)});
  }

export function getOptimisticData() : void {
axios.get(url.arbitrum)
.then((response : any) =>{ console.log(response.data);
 
})
.catch((error: any)  => { console.log(error)});
}

export function getBSCData() : void {
    axios.get(url.bsc)
    .then((response : any) =>{ console.log(response.data);
     
    })
    .catch((error: any)  => { console.log(error)});
    }

export function getPolygonData() : void {
      axios.get(url.polygon)
      .then((response : any) =>{ console.log(response.data);
       
      })
      .catch((error: any)  => { console.log(error)});
      }

export function getArbitrumData() : void {
        axios.get(url.arbitrum)
        .then((response : any) =>{ console.log(response.data);
         
        })
        .catch((error: any)  => { console.log(error)});
        }

export function getAvalancheData() : void {
        axios.get(url.avalanche)
        .then((response : any) =>{ console.log(response.data);
         
        })
        .catch((error: any)  => { console.log(error)});
        }