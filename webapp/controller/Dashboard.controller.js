sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("EbmApp.LeadManagement.controller.Dashboard", {
		onInit: function () {
             var oVizFrame = this.getView().byId("idpiechart");
             var oModel = new sap.ui.model.json.JSONModel();
             var data = {
			'Sales' : [{
				  "DrugName": "Cranberry Cream",
				  "Revenue": "7.37"
				}, {
				  "DrugName": "Wart Remover Liquid",
				  "Revenue": "9.54"
				}, {
				  "DrugName": "Hydrochlorothiazide",
				  "Revenue": "6.57"
				}, {
				  "DrugName": "Terazosin Hydrochloride",
				  "Revenue": "5.41"
				}, {
				  "DrugName": "Topiramate",
				  "Revenue": "8.69"
				}]};
		oModel.setData(data);
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [{
			        name : 'Drug Name',
				value : "{DrugName}"}],
			               
			measures : [{
				name : 'Revenue',
				value : '{Revenue}'} ],
			             
			data : {
				path : "/Sales"
			}
		});		
		oVizFrame.setDataset(oDataset);
		oVizFrame.setModel(oModel);	
		oVizFrame.setVizProperties({
			title:{
				text : "Product Sales"
			},
            plotArea: {
            	colorPalette : d3.scale.category20().range(),
            	drawingEffect: "glossy"
                }});
		
		var feedSize = new sap.viz.ui5.controls.common.feeds.FeedItem({
		      'uid': "size",
		      'type': "Measure",
		      'values': ["Revenue"]
		    }), 
		    feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
		      'uid': "color",
		      'type': "Dimension",
		      'values': ["Drug Name"]
		    });
		oVizFrame.addFeed(feedSize);
		oVizFrame.addFeed(feedColor);

            var oVizFrame1 = this.getView().byId("idStackedChart");
             var oModel1 = new sap.ui.model.json.JSONModel();
             var data1 = {
			'Sales1' : [{
				  "DrugName": "Cranberry Cream",
				  "Revenue": "7.37"
				}, {
				  "DrugName": "Wart Remover Liquid",
				  "Revenue": "9.54"
				}, {
				  "DrugName": "Hydrochlorothiazide",
				  "Revenue": "6.57"
				}, {
				  "DrugName": "Terazosin Hydrochloride",
				  "Revenue": "5.41"
				}, {
				  "DrugName": "Topiramate",
				  "Revenue": "8.69"
				}]};
		oModel1.setData(data1);
		var oDataset1 = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [{
			        name : 'Drug Name',
				value : "{DrugName}"}],
			               
			measures : [{
				name : 'Revenue',
				value : '{Revenue}'} ],
			             
			data: {
				path : "/Sales1"
			}
		});		
		oVizFrame1.setDataset(oDataset1);
		oVizFrame1.setModel(oModel1);	
		oVizFrame1.setVizProperties({
			title:{
				text : "Company Leads"
			},
            plotArea: {
            	colorPalette : d3.scale.category20().range(),
            	drawingEffect: "glossy"
                }});
		
		 var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
		      'uid': "valueAxis",
		      'type': "Measure",
		      'values': ["Revenue"]
		    }), 
		     feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
		      'uid': "categoryAxis",
		      'type': "Dimension",
		      'values': ["Drug Name"]
		    });
		oVizFrame1.addFeed(feedValueAxis);
		oVizFrame1.addFeed(feedCategoryAxis);
	/*	var sampleDatajson = new sap.ui.model.json.JSONModel("model/Data.json");
			var oVizFrame1 = this.getView().byId("idStackedChart");
			oVizFrame1.setVizProperties({
				plotArea: {
					colorPalette: d3.scale.category20().range(),
					dataLabel: {
						showTotal: true
					}
				},
				tooltip: {
					visible: true
				},
				title: {
					text: "Stacked Bar Chart"
				}
			});
			var oDataset1 = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: "Year",
					value: "{Year}"
				}],

				measures: [{
					name: "Milk",
					value: "{Milk}"
				}, {
					name: "Sugar",
					value: "{Sugar}"
				}, {
					name: "Tea",
					value: "{Tea}"
				}],

				data: {
					path: "/items"
				}
			});
			oVizFrame1.setDataset(oDataset1);

			oVizFrame1.setModel(sampleDatajson);

			var oFeedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "valueAxis",
					"type": "Measure",
					"values": ["Milk"]
				}),
				oFeedValueAxis1 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "valueAxis",
					"type": "Measure",
					"values": ["Sugar"]
				}),
				oFeedValueAxis2 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "valueAxis",
					"type": "Measure",
					"values": ["Tea"]
				}),

       oFeedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "categoryAxis",
					"type": "Dimension",
					"values": ["Year"]
				});

			oVizFrame1.addFeed(oFeedValueAxis);
			oVizFrame1.addFeed(oFeedValueAxis1);
			oVizFrame1.addFeed(oFeedValueAxis2);
			oVizFrame1.addFeed(oFeedCategoryAxis);
*/
		
		},
	    onCreate:function(){
			this.getOwnerComponent().getRouter().navTo("CreateAdmin");
		}
	});
});