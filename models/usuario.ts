import { DataTypes } from 'sequelize';
import db from '../db/connection';

/*
The name, in this case 'User', inside db.define() is what matters, that is, it has to have the same name as in the DB.
Well, here we can have it in singular and sequelize is gonna take charge to make it plural, but in the original DB it
has to be in plural, here it does not matter.
*/
const User = db.define('User', {
    firstname: {
        type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING,
    },
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    role_id: {
        type: DataTypes.INTEGER,
    },
});

export default User;
