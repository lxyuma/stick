(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/keyword-create'
		],
		function( KeywordCreate ) {

			describe('KeywordCreate Itemview', function () {

				it('should be an instance of KeywordCreate Itemview', function () {
					var keyword-create = new KeywordCreate();
					expect( keyword-create ).to.be.an.instanceof( KeywordCreate );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );