
module.exports = async function (app) {
     app.enableAuth();
    await app.dataSources.db.automigrate();
    console.log("Performed automigration.");
 }