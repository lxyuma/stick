(function() {
	'use strict';

	var root = this;

	root.define([
		'models/keyword'
		],
		function( Keyword ) {

			describe('Keyword Model', function () {

				it('should be an instance of Keyword Model', function () {
					var keyword = new Keyword();
					expect( keyword ).to.be.an.instanceof( Keyword );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );