sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/Dialog",
	"sap/m/Button",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/ui/core/Fragment"
], function (Controller,MessageToast,Dialog,List,StandardListItem,Button,ButtonType,Fragment) {
	"use strict";

	return Controller.extend("EbmApp.LeadManagement.controller.LoginPage", {
		onInit: function () {

		},
	onLogin	:function(){
		     /*var oRouter = this.getRouter();
             var Username = this.getView().byId("uid").getValue();
             var Password = this.getView().byId("pasw").getValue();
             if (Username === "") {
                 MessageToast.show("Please Enter UserID");
                 return false;
             } else if (Password === "") {
                 MessageToast.show("Please Enter Password");
                 return false;
             } else {
                /* MessageToast.show("Successfully Logedin");
                 
	            	this.getRouter().navTo("dashboard");
	             
             }*/
             this.getOwnerComponent().getRouter().navTo("dashboard");
         },
	onForgot :function(){
			this.EmployeeDailog = sap.ui.xmlfragment("Fragment.ForgetPassword", this);
                this.EmployeeDailog.open();
	
	}

	});
});