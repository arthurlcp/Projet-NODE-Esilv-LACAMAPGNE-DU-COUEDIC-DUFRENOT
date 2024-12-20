const {sequelize} = require("sequelize");  
const defaulturl = "mysql://root:root@localhost:3306/bonbons";

const connection = new Sequelize(Process.env.DATABASE_URL ??  defaulturl);
connection.authenticate()
    .then(() => console.log("Connection has been established successfully."))
    .catch((error) => console.error("Unable to connect to the database:", error));
module.exports = connection;

