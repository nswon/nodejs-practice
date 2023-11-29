import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nswon0729@",
  database: "nodejs",
});

export default connection;
