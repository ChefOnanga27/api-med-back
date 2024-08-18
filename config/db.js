// config/db.js
export const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '3306',
  database: process.env.DB_DATABASE || 'medconnect'
};

export default dbConfig;



