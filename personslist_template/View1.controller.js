sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";
	return Controller.extend("personslist.controller.View1", {
		onInit: function() {
			var oBar = new sap.m.Bar({
				contentLeft: [new sap.m.Image({
					src: "https://www.sap.com/dam/application/shared/logos/sap-logo.png",
					height: "45px"
				})],
				contentMiddle: [new sap.m.Label({
					text: "Personslist",
					textAlign: "Left",
					design: "Bold"
				})],
				contentRight: []
			});
			var oPage = this.getView().byId("idpage");
			oPage.setCustomHeader(oBar);
		},
		onPress: function(oEvent){
			// 'OnPress' of 'Create' Button add logic to insert FirstName and LastName into the Table		 
		  }

	});
});