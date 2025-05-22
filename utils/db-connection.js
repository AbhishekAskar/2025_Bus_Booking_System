const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('bbs', 'root', 'Root@123', {
    host: "localhost",
    dialect: "mysql"
});

//.authenticate returns promise that's why we use AWAIT here

(async() =>{
    try{
 
    await sequelize.authenticate();
    console.log("Connection to the database has been created");

} catch (error){

    console.log(error);

}})();

module.exports = sequelize;