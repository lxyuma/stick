define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
    url : "/api/v1/keywords",
		initialize: function() {
			console.log("initialize a Keyword model");
		},

		defaults: {},

    });
});
