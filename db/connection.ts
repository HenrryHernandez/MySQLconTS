import { Sequelize } from "sequelize";

const db = new Sequelize('testdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
});

export default db;