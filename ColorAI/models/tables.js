import sequelize from "./sequelize.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marketingEmails: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

// add more tables here
