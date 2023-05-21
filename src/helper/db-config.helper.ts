import {config} from "../datasource";
import sql from 'mssql/msnodesqlv8';


export class ConnectionPoolInstance {
    private static instance: Promise<sql.ConnectionPool>;


    static getInstance() {
        try{
            if (!this.instance) {
                this.instance = new sql.ConnectionPool(config).connect();
            }
            return this.instance;
        }catch(ex:any)
        {
            console.log(ex.message);
            return ex.message
        }
       
    }
}