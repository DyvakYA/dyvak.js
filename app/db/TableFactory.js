const user = require('./Users');
const product = require('./ProductRepository');

function table(tableName) {
    if( tableName === 'users'){
        return user;
    } else if(tableName === 'products'){
        return product;
    } else {
        const message = 'No table with name ' + tableName;
        console.log(message);
        alert(message);
    }
}

module.exports = { table };

