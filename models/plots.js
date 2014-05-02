var schema = require('../app').schema;

// Plot entity (Parcela)
var Plot = schema.define('Plot', {
	couchType: {
        type: String,
        limit: 25,
        default: 'plot',
        index: true
    },
	description: {
        type: String,
        limit: 255
    },
	region: {
        type: String,
        limit: 50,
        index: true
    },
	province: {
        type: String,
        limit: 50,
        index: true
    },
	city: {
        type: String,
        limit: 100,
        index: true
    },
	sigpac: {
        type: String,
        limit: 50,
        index: true
    },
	agg: {             // Agregado
        type: String,
        limit: 8,
        index: true
    },
	pol: {             // Polígono
        type: String,
        limit: 8,
        index: true
    },
	plot: {            // Parcela
        type: String,
        limit: 8,
        index: true
    },
	area: {            // Recinto
        type: String,
        limit: 8,
        index: true
    },
}, {
    table: 'Plots'
});

// *** Getters ************************************************************
Plot.prototype.getDescription = function () {
    return this.description;
};

Plot.prototype.getRegion = function () {
    return this.region;
};

Plot.prototype.getProvince = function () {
    return this.province;
};

Plot.prototype.getCity = function () {
    return this.city;
};

Plot.prototype.getSigpac = function () {
    return this.sigpac;
};

Plot.prototype.getAgg = function () {
    return this.agg;
};

Plot.prototype.getPol = function () {
    return this.pol;
};

Plot.prototype.getPlot = function () {
    return this.plot;
};

Plot.prototype.getArea = function () {
    return this.area;
};

// *** Setters ************************************************************
Plot.prototype.setDescription = function (description) {
    this.updateAttribute('description', description);
    return this;
};

Plot.prototype.setRegion = function (region) {
    this.updateAttribute('region', region);
    return this;
};

Plot.prototype.setProvince = function (province) {
    this.updateAttribute('province', province);
    return this;
};

Plot.prototype.setCity = function (city) {
    this.updateAttribute('city', city);
    return this;
};

Plot.prototype.setSigpac = function (sigpac) {
    this.updateAttribute('sigpac', sigpac);
    return this;
};

Plot.prototype.setAgg = function (agg) {
    this.updateAttribute('agg', agg);
    return this;
};

Plot.prototype.setPol = function (pol) {
    this.updateAttribute('pol', pol);
    return this;
};

Plot.prototype.setPlot = function (plot) {
    this.updateAttribute('plot', plot);
    return this;
};

Plot.prototype.setArea = function (area) {
    this.updateAttribute('area', area);
    return this;
};

module.exports = Plot;
