var schema = require('../app').schema;

// Tank entity (Depósito)
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
    capacity: {
        type: Number,
        limit: 25
    },
    filled: {
        type: Number,
        limit: 25
    },
    unit: {
        type: String,
        default: 'litres',
        limit: 15
    }
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

Tank.prototype.getCapacity = function () {
    return this.capacity;
};

Tank.prototype.getFilled = function () {
    return this.filled;
};

Tank.prototype.getUnit = function () {
    return this.unit;
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

Tank.prototype.setCapacity = function (capacity) {
    this.updateAttribute('capacity', capacity);
    return this;
};

Tank.prototype.setFilled = function (filled) {
    this.updateAttribute('filled', filled);
    return this;
};

Tank.prototype.setUnit = function (unit) {
    this.updateAttribute('unit', unit);
    return this;
};

module.exports = Tank;
