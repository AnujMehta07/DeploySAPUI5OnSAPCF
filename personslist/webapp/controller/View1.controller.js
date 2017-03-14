sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("personslist.controller.View1", {
		onInit: function() {
			
			// set explored app's demo model on this sample
			var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/persons.json"));
			this.getView().setModel(oModel);
			// set explored app's demo model on this sample
			/*	var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/persons.json"));
				this.getView().setModel(oModel);*/
			var oBar = new sap.m.Bar({
				contentLeft: [new sap.m.Image({
					src: "https://www.sap.com/dam/application/shared/logos/sap-logo.png.adapt.72_36.false.false.false.false.png",
					height: "45px"
				})],
				contentMiddle: [new sap.m.Label({
					text: "{i18n>title}",
					textAlign: "Left",
					design: "Bold"
				})],
				contentRight: []
			});
			var oPage = this.getView().byId("idpage");
			oPage.setCustomHeader(oBar);
		},
		onPress: function(oEvent){
			var oLastName = this.getView().byId("idlastname").getValue();
			var oFirstName = this.getView().byId("idfirstname").getValue();
			var oData = {items: 
                        [{
                            LastName: oLastName,
                            FirstName:oFirstName 
                        }
                         ]
        };
        
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.setData(oData);
        
        this.getView().setModel(oModel);

			
			
		}

	});
});