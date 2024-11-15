import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('Usuarios', {
  nome: {
   type: DataTypes.STRING,
   allowNull: false,
  },
   email: {
   type: DataTypes.STRING,
   allowNull: false,
  },
   senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
   timestamps: false,
});

export default User;
