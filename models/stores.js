var schema = require('../app').schema;

var Store = schema.define('Store', {
	couchType: {
        type: String,
        limit: 25,
        default: 'store',
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
    table: 'Stores'
});

// *** Getters ************************************************************
Store.prototype.getName = function () {
    return this.name;
};

Store.prototype.getDescription = function () {
    return this.description;
};

// *** Setters ************************************************************
Store.prototype.setName = function (name) {
    this.updateAttribute('name', name);
    return this;
};

Store.prototype.setDescription = function (description) {
    this.updateAttribute('description', description);
    return this;
};

module.exports = Store;
