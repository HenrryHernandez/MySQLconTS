"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
/*
The name, in this case 'User', inside db.define() is what matters, that is, it has to have the same name as in the DB.
Well, here we can have it in singular and sequelize is gonna take charge to make it plural, but in the original DB it
has to be in plural, here it does not matter.
*/
const User = connection_1.default.define('User', {
    firstname: {
        type: sequelize_1.DataTypes.STRING,
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    role_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
});
exports.default = User;
//# sourceMappingURL=usuario.js.map