'use strict';

var Sequelize = require('sequelize');
var db = require('../index');
var Campus = require('./campus');

module.exports = db.define('student', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	fullName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING
		// validate: {
		// 	isEmail: true
		// }
	}
}, {
	classMethods: {
		findByCampus: function(campusId) {
			return this.findAll({
				where: {
					campusId: campusId
				}
			})
		}
	},
	hooks: {
		beforeValidate: function(student){
			student.fullName = (student.firstName && student.lastName) ?
	          (student.firstName.toLowerCase()).concat('').concat(student.lastName.toLowerCase()) :
	          'noname';
		}
	},
	defaultScope: {
		include: [{
			model: Campus
		}]
	}
})