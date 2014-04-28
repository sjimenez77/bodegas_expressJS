var schema = require('../app').schema;

var User = schema.define('User', {
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

// Getters
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

// Setters
User.prototype.setEmail = function (email) {
    this.email = email;
};

User.prototype.setName = function (name) {
    this.name = name;
};

User.prototype.setSurname = function (surname) {
    this.surname = surname;
};

User.prototype.setRegistrationDate = function (date) {
    this.registrationDate = date;
};

User.prototype.setActivated = function (activated) {
    this.activated = activated;
};

module.exports = User;
