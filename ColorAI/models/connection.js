import sequelize from "./sequelize.js";

const initDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
    await sequelize.sync();
    console.log("Database synchronized.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const closeDb = async () => {
  try {
    await sequelize.close();
    console.log("Database connection closed successfully.");
  } catch (error) {
    console.error("Error closing the database connection:", error);
  }
};

export { initDb, closeDb };
