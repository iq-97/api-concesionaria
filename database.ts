import { createPool} from 'mysql2/promise';

export async function  connect(){

   const connection = await  createPool({
        host: process.env.HOST,
        user: process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.DATA_BASE,
        connectionLimit:10
    });
    return connection;
}

export default connect;
