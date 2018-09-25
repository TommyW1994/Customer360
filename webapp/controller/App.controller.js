sap.ui.define([
	"com/delaware/tw/trac2018/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.delaware.tw.trac2018.controller.App", {
		onInit: function(){
			this.getModel("appView").setProperty("/layout", "OneColumn");
		}
	});
});