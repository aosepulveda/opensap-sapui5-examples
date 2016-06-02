sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	
	return Controller.extend("opensap.myapp.controller.App", {
		
		onShowHello: function() {
			alert("Hello World");
		}
	});
});