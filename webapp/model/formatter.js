sap.ui.define([], function() {
	"use strict";
	
	return {
		delivery : function(iWeight, sMeasure) {
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var sResult = "";
			
			if(sMeasure === "G"){
				iWeight = iWeight / 1000;
			}
			
			if (iWeight < 0.5) {
				sResult = oResourceBundle.getText("formatterMailDelivery");
			} else if (iWeight < 5) {
				sResult = oResourceBundle.getText("formatterParcelDelivery");
			} else {
				sResult = oResourceBundle.getText("formatterCarrierDelivery");
			}
			
			return sResult;
		},
		formatMapUrl: function(sStreet, sCity, sCountry) {
			var sResult = "https://maps.googleapis.com/maps/api/staticmap?center=";
			sResult += sStreet;
			sResult += "," + sCity;
			sResult += "," + sCountry;
			sResult += "&markers=color:red%7Clabel:A|";
			sResult += sStreet;
			sResult += "," + sCity;
			sResult += "," + sCountry;
			sResult += "&size=600x300&key=AIzaSyBwkarlDTBbGVnR96dV6qse6IhsiIVnB78";
			return sResult;
		}
	};
});