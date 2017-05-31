'use strict';

var Sequelize = require('sequelize');
var db = require('../index');

module.exports =  db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}
}, {
	scopes: {
		populated: ()=> ({
			include: [{
				model: db.model('student')
			}]
		})
	}
});
