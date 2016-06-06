sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";
	
	return UIComponent.extend("opensap.myapp.Component", {
		
		metadata: {
			manifest: "json"
		},
		
		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
			
			// used only for this lessons to show the request individually...
			this.getModel().setUseBatch(false);

			// Agregar cosas extras en init.
		} 
	});
});