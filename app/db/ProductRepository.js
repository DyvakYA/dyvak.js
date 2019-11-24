const products = require('./Products');
const Repository = require('./Repository');

let rep = '';

if(rep === ''){
    rep = new Repository(products);
}

module.exports = {
    findById: function(id) {
        return rep.findById(id);
    },
    findAll: function() {
        return rep.findAll();
    },
    create: function(item) {
        return rep.create(item);
    },
    update: function(item) {
        return rep.update(item);
    },
    delete: function(id) {
        return rep.delete(id);
    }
};
