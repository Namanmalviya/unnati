import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function initDB() {
  try {
    const connection = await mysql.createConnection({
      uri: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      },
      connectTimeout: 60000
    });

    console.log("Database connected");
    return connection;

  } catch (err) {
    console.log("Database connection failed:", err);
  }
}

const db = await initDB();

export default db;