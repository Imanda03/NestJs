import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export const devConfig: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'anish',
    database: 'NestCrud',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
}