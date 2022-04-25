export interface barnBridgeData { 
        poolName: string,
        poolAddress: string,
        poolToken : poolToken,
        juniorTokenAddress: string,
        seniorTokenAddress: string,
        oracleAddress: string,
        oracleAssetSymbol: string,
        seniorRateModelAddress: string,
        accountingModelAddress: string,
        epoch1Start: number,
        epochDuration: number,
        state: state,
        tvl: tvl
        }
export interface  poolToken {

        address: string,
        symbol: string,
        decimals: number
        }

export interface state{
        epoch: number,
        seniorLiquidity: string,
        juniorLiquidity: string,
        upsideExposureRate: string,
        downsideProtectionRate: string         
}
export interface tvl{
        epochJuniorTVL: number,
        epochSeniorTVL: number,
        juniorEntryQueueTVL: number,
        seniorEntryQueueTVL: number,
        juniorExitQueueTVL: number,
        seniorExitQueueTVL: number,
        juniorExitedTVL: number,
        seniorExitedTVL: number
                
}
export interface barnBridgeDataWithID{ 
        chainID: number,
        poolName: string,
        poolAddress: string,
        poolToken : poolToken,
        juniorTokenAddress: string,
        seniorTokenAddress: string,
        oracleAddress: string,
        oracleAssetSymbol: string,
        seniorRateModelAddress: string,
        accountingModelAddress: string,
        epoch1Start: number,
        epochDuration: number,
        state: state,
        tvl: tvl
        }