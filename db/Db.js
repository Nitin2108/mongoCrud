const dbConfig = require('../config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
module.exports = (function(){
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
})();

