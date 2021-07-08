


import "reflect-metadata";
import { createConnection } from "typeorm";


export async function connect(){

   const connection =  createConnection({
        type: "mysql",
        host: process.env.HOST,
        port: Number(process.env.PORT_DB),
        username:  process.env.USER,
        password:  process.env.PASSWORD,
        database:  process.env.DATA_BASE,
        entities: [
           "src/Domain/Entities/*.ts"
        ],  
        cli: {
              entitiesDir: "src/Domain/Entities"
        },  
        synchronize: false,
        logging: false
    }).then(connection => {
        //console.log(connection);
    }).catch(error => console.log(error));

    return connection;
}

export default connect;