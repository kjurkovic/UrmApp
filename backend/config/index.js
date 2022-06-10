const config = {
  db: {
    host: process.env.GLUTENNO_DB_HOST,
    name: process.env.GLUTENNO_DB_NAME,
    port: process.env.GLUTENNO_DB_PORT,
    user: process.env.GLUTENNO_DB_USER,
    password: process.env.GLUTENNO_DB_PASS,
    dialect: process.env.GLUTENNO_DB_DIALECT,
  }
}

export default config;
