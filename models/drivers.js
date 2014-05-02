var schema = require('../app').schema;

// Driver entity (Conductor)
var Driver = schema.define('Driver', {
	couchType: {
        type: String,
        limit: 25,
        default: 'driver',
        index: true
    },
    email: {
        type: String,
        limit: 150,
        index: true
    },
    name: {
        type: String,
        limit: 150,
        index: true
    },
    surname: {
        type: String,
        limit: 150,
        index: true
    },
	nif: {
        type: String,
        limit: 12,
        index: true
    },
    numberPlate: {
        type: String,
        limit: 12,
        index: true,
    }
}, {
    table: 'Drivers'
});

// *** Getters ************************************************************
Driver.prototype.getEmail = function () {
    return this.email;
};

Driver.prototype.getName = function () {
    return this.name;
};

Driver.prototype.getSurname = function () {
    return this.surname;
};

Driver.prototype.getNIF = function () {
    return this.nif;
};

Driver.prototype.getNumberPlate = function () {
    return this.nif;
};

// *** Setters ************************************************************
Driver.prototype.setEmail = function (email) {
    this.updateAttribute('email', email);
    return this;
};

Driver.prototype.setName = function (name) {
    this.updateAttribute('name', name);
    return this;
};

Driver.prototype.setSurname = function (surname) {
    this.updateAttribute('surname', surname);
    return this;
};

Driver.prototype.setNIF = function (nif) {
    this.updateAttribute('nif', nif);
    return this;
};

Driver.prototype.setNumberPlate = function (newNumber) {
    this.updateAttribute('numberPlate', newNumber);
    return this;
};

module.exports = Driver;
