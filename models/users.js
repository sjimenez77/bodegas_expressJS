var schema = require('../app').schema;

var User = schema.define('User', {
	couchType: {
        type: String,
        limit: 25,
        default: 'user',
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
    password: {
        type: String,
        limit: 255
    },
    birthDate: Date,
    registrationDate: {
        type: Date,
        default: function () { return new Date },
        index: true
    },
    activated: {
        type: Boolean,
        default: false
    }
}, {
    table: 'users'
});

// *** Getters ************************************************************
User.prototype.getEmail = function () {
    return this.email;
};

User.prototype.getName = function () {
    return this.name;
};

User.prototype.getSurname = function () {
    return this.surname;
};

User.prototype.getRegistrationDate = function () {
    return this.registrationDate;
};

User.prototype.getActivated = function () {
    return this.activated;
};

// *** Setters ************************************************************
User.prototype.setEmail = function (email) {
    this.updateAttribute('email', email);
    return this;
};

User.prototype.setName = function (name) {
    this.updateAttribute('name', name);
    return this;
};

User.prototype.setSurname = function (surname) {
    this.updateAttribute('surname', surname);
    return this;
};

User.prototype.setRegistrationDate = function (date) {
    this.updateAttribute('date', date);
    return this;
};

User.prototype.setActivated = function (activated) {
    this.updateAttribute('activated', activated);
    return this;
};

module.exports = User;
