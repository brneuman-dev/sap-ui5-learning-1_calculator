/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapui5.learning.calculator./sap-ui5-learning-1_calculator/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});