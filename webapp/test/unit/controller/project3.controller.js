/*global QUnit*/

sap.ui.define([
	"uiview2./project3/controller/project3.controller"
], function (Controller) {
	"use strict";

	QUnit.module("project3 Controller");

	QUnit.test("I should test the project3 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
