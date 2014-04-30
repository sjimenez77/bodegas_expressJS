var schema = require('../app').schema;
var Tank = require('./tanks');
var Stock = require('./stocks');

var Product = schema.define('Product', {
	couchType: {
		type: String,
		limit: 25,
		default: 'Product',
		index: true
	},
	name: {
		type: String,
		limit: 50,
		index: true
	},
	description: {
		type: String,
		limit: 255
	},
	productClass: {
		type: String,
		limit: 50,
		index: true
	},
	grape: {
		type: String,
		limit: 50,
		default: null,
		index: true
	},
	wine: {
		type: String,
		limit: 50,
		default: null,
		index: true
	},
	composition: {
		type: JSON,
		default: null
	},
}, {
	table: 'Products'
});

// *** Getters ************************************************************
Product.prototype.getName = function () {
	return this.name;
};

Product.prototype.getDescription = function () {
	return this.description;
};

Product.prototype.getProductClass = function () {
	return this.productClass;
};

Product.prototype.getGrape = function () {
	return this.grape;
};

Product.prototype.getWine = function () {
	return this.wine;
};

Product.prototype.getComposition = function () {
	return this.composition;
};

// *** Setters ************************************************************
Product.prototype.setName = function (name) {
	this.updateAttribute('name', name);
	return this;
};

Product.prototype.setDescription = function (description) {
	this.updateAttribute('description', description);
	return this;
};

Product.prototype.setProductClass = function (productClass) {
	this.updateAttribute('productClass', productClass);
	return this;
};

Product.prototype.setGrape = function (grape) {
	this.updateAttribute('grape', grape);
	return this;
};

Product.prototype.setWine = function (wine) {
	this.updateAttribute('wine', wine);
	return this;
};


Product.prototype.setComposition = function (composition) {
	this.updateAttribute('composition', composition);
	return this;
};

// *** Relationships ******************************************************
if (Product.wine === null)
{
	Stock.hasMany(Product, {as: 'products', foreignKey: 'stockId'});
	Product.belongsTo(Stock, {as: 'stock', foreignKey: 'stockId'});
}
else
{
	Tank.hasMany(Product, {as: 'products', foreignKey: 'tankId'});
	Product.belongsTo(Tank, {as: 'tank', foreignKey: 'tankId'});
};

module.exports = Product;
