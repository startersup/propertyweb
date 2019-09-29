module.exports= async function(app){
    var citydata = require('./data-dictionary');
    var City = app.models.City;
     citydata.forEach(  async city => {
        await City.create([
            {name: city}], async function(err, city) {
                if(err)throw err;
            console.log('Created City:', city);
          });
    });

}