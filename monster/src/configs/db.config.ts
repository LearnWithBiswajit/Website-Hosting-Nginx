import { mysqlDbEntities } from "src/Entities/mysql.entities";
import { DataSourceOptions } from "typeorm";

export const dbConfig:DataSourceOptions[] = [
    {
        type:"mysql",
        host:"172.31.15.28",
        port:3306,
        username:"root",
        password:"root",
        database:"Monster",
        synchronize:false,
        logging:true,
        entities:mysqlDbEntities,
        connectTimeout:150000
    }
]
