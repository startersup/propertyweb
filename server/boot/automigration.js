
module.exports = async function (app) {
     app.enableAuth();
    await app.dataSources.db.autoupdate();
    console.log("Performed automigration.");
 }