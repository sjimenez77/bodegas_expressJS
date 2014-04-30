var schema = require('../app').schema;

var Stock = schema.define('Stock', {
	couchType: {
        type: String,
        limit: 25,
        default: 'stock',
        index: true
    },
    name: {
        type: String,
        limit: 25,
        index: true
    },
    description: {
        type: String,
        limit: 255
    },
}, {
    table: 'Stocks'
});

// *** Getters ************************************************************
Stock.prototype.getName = function () {
    return this.name;
};

Stock.prototype.getDescription = function () {
    return this.description;
};

// *** Setters ************************************************************
Stock.prototype.setName = function (name) {
    this.updateAttribute('name', name);
    return this;
};

Stock.prototype.setDescription = function (description) {
    this.updateAttribute('description', description);
    return this;
};

module.exports = Stock;
