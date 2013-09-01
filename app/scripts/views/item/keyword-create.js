define([
	'backbone',
	'hbs!tmpl/item/keyword-create_tmpl',
  'models/keyword'
],
function( Backbone, KeywordCreateTmpl, Keyword ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a KeywordCreate ItemView");
		},
		
    	template: KeywordCreateTmpl,
        

    	/* ui selector cache */
    	ui: { form: "#keyword-create-form"},

		/* Ui events hash */
		events: {"submit" : "submitJson"},

		/* on render callback */
		onRender: function() {},

    submitJson: function(e) {
      e.preventDefault();
      var keyword = new Keyword({title: this.ui.form.find("[name='title']").val()});
      keyword.save();
    }
	});

});
