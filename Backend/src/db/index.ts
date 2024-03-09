import mysql from "mysql";

function connectDB() {
  // Create a connection pool
  try {
    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      connectionLimit: 10,
      waitForConnections: true,
      queueLimit: 0,
    });

    pool.getConnection(function (err, conn) {
      if (err) console.log(err); // not connected!
      console.log("Connected!");
    });
  } catch (err: any) {
    console.log(err.message || "Error connecting to MySQL Database");
    process.exit(1);
  }
}

export { connectDB };
