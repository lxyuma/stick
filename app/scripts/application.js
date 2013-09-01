define([
	'backbone',
	'communicator',
	'hbs!tmpl/welcome',
  'views/item/keyword-create',
  'models/keyword'
],

function( Backbone, Communicator, Welcome_tmpl, KeywordCreateView, Keyword ) {
    'use strict';

	var welcomeTmpl = Welcome_tmpl;

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({mainRegion : "#main"});

	/* Add initializers here */
	App.addInitializer( function () {
    App.mainRegion.show( new KeywordCreateView({ model: new Keyword }));
//		document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});
