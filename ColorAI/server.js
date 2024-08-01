import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { initDb, closeDb } from "./models/connection.js";
import generateRoutes from "./routes/generate.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize database
await initDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", generateRoutes);

//handle server shutdown
process.on("SIGINT", async () => {
  await closeDb();
  process.exit();
});
process.on("SIGTERM", async () => {
  await closeDb();
  process.exit();
});

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
