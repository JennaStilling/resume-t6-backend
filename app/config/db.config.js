const db_host = process.env.DB_HOST;
const db_pw = process.env.DB_PW;
const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;

console.log(db_host);
console.log(db_pw);
console.log(db_user);
console.log(db_name);

module.exports = {
  HOST: db_host,
  USER: db_user,
  PASSWORD: db_pw,
  DB: db_name,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};