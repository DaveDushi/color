import { Sequelize } from "sequelize";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a new Sequelize instance with connection pooling
// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: path.join(__dirname, "../mydb.sqlite"),
//   pool: {
//     max: 10, // Maximum number of connections in the pool
//     min: 0, // Minimum number of connections in the pool
//     acquire: 30000, // Maximum time, in milliseconds, to wait for a connection
//     idle: 10000, // Maximum time, in milliseconds, a connection can be idle before being released
//   },
// });

// for dev only
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
});
export default sequelize;
