var schema = require('../app').schema;

var Tank = schema.define('Tank', {
	couchType: {
        type: String,
        limit: 25,
        default: 'tank',
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
    table: 'Tanks'
});

// *** Getters ************************************************************
Tank.prototype.getName = function () {
    return this.name;
};

Tank.prototype.getDescription = function () {
    return this.description;
};

// *** Setters ************************************************************
Tank.prototype.setName = function (name) {
    this.updateAttribute('name', name);
    return this;
};

Tank.prototype.setDescription = function (description) {
    this.updateAttribute('description', description);
    return this;
};

module.exports = Tank;
