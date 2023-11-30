import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const { HOST, ROOT, PASSWORD, DATABASE } = process.env;

const connection = mysql.createConnection({
  host: HOST,
  user: ROOT,
  password: PASSWORD,
  database: DATABASE,
});

export default connection;
