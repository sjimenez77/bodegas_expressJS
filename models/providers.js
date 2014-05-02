var schema = require('../app').schema;

// Provider entity (Proveedor)
var Provider = schema.define('Provider', {
	couchType: {
        type: String,
        limit: 25,
        default: 'provider',
        index: true
    },
	name: {
        type: String,
        limit: 150,
        index: true
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
    table: 'Companies'
});

// *** Getters ************************************************************
Provider.prototype.getName = function () {
    return this.name;
};

Provider.prototype.getNIF = function () {
    return this.nif;
};

Provider.prototype.getAddress = function () {
    return this.address;
};

Provider.prototype.getPostalCode = function () {
    return this.postalCode;
};

Provider.prototype.getRegion = function () {
    return this.region;
};

Provider.prototype.getProvince = function () {
    return this.province;
};

Provider.prototype.getCity = function () {
    return this.city;
};

Provider.prototype.getTlf = function () {
    return this.nif;
};

Provider.prototype.getEmail = function () {
    return this.email;
};

// *** Setters ************************************************************
Provider.prototype.setName = function (name) {
    this.updateAttribute('name', name);
    return this;
};

Provider.prototype.setNIF = function (nif) {
    this.updateAttribute('nif', nif);
    return this;
};

Provider.prototype.setAddress = function (address) {
    this.updateAttribute('address', address);
    return this;
};

Provider.prototype.setPostalCode = function (pCode) {
    this.updateAttribute('postalCode', pCode);
    return this;
};

Provider.prototype.setRegion = function (region) {
    this.updateAttribute('region', region);
    return this;
};

Provider.prototype.setProvince = function (province) {
    this.updateAttribute('province', province);
    return this;
};

Provider.prototype.setCity = function (city) {
    this.updateAttribute('city', city);
    return this;
};

Provider.prototype.setTlf = function (tlf) {
    this.updateAttribute('tlf', tlf);
    return this;
};

Provider.prototype.setEmail = function (email) {
    this.updateAttribute('email', email);
    return this;
};

module.exports = Provider;
