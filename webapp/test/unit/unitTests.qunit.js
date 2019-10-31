/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"EbmApp/LeadManagement/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});