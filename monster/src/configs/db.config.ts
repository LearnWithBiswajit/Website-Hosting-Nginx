import { mysqlDbEntities } from "src/Entities/mysql.entities";
import { DataSourceOptions } from "typeorm";

export function dbConfig():DataSourceOptions[] {return [
    {
        type:"mysql",
        host:process.env.DB_HOST,
        port:parseInt(process.env.DB_PORT),
        username:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME,
        synchronize:false,
        logging:true,
        entities:mysqlDbEntities,
        connectTimeout:150000,
    }
]
}