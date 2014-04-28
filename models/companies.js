var schema = require('../app').schema;

var Company = schema.define('Company', {
	name: {
        type: String,
        limit: 150,
        index: true
    },
	type: {
        type: String,
        default: 'Bodega',
        limit: 25,
    },
	nif: {
        type: String,
        limit: 12,
        index: true
    },
	address: {
        type: String,
        limit: 150,
    },
	postalCode: {
        type: String,
        limit: 10,
        index: true
    },
	region: {
        type: String,
        limit: 50,
    },
	province: {
        type: String,
        limit: 50,
    },
	city: {
        type: String,
        limit: 100,
    },
    tlf: {
        type: String,
        limit: 25,
        index: true
    },
    email: {
        type: String,
        limit: 150,
        index: true
    },
}, {
    table: 'companies'
});

// *** Getters ************************************************************
Company.prototype.getName = function () {
    return this.name;
};

Company.prototype.getType = function () {
    return this.type;
};

Company.prototype.getNIF = function () {
    return this.nif;
};

Company.prototype.getAddress = function () {
    return this.address;
};

Company.prototype.getPostalCode = function () {
    return this.postalCode;
};

Company.prototype.getRegion = function () {
    return this.region;
};

Company.prototype.getProvince = function () {
    return this.province;
};

Company.prototype.getCity = function () {
    return this.city;
};

Company.prototype.getTlf = function () {
    return this.nif;
};

Company.prototype.getEmail = function () {
    return this.email;
};

// *** Setters ************************************************************
Company.prototype.setName = function (name) {
    this.name = name;
    return this;
};

Company.prototype.setType = function (type) {
    this.type = type;
    return this;
};

Company.prototype.setNIF = function (nif) {
    this.nif = nif;
    return this;
};

Company.prototype.setAddress = function (address) {
    this.address = address;
    return this;
};

Company.prototype.setPostalCode = function (pCode) {
    this.postalCode = pCode;
    return this;
};

Company.prototype.setRegion = function (region) {
    this.region = region;
    return this;
};

Company.prototype.setProvince = function (province) {
    this.province = province;
    return this;
};

Company.prototype.setCity = function (city) {
    this.city = city;
    return this;
};

Company.prototype.setTlf = function (tlf) {
    this.tlf = tlf;
    return this;
};

Company.prototype.setEmail = function (email) {
    this.email = email;
    return this;
};


module.exports = Company;
