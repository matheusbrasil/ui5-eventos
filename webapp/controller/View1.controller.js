sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.eventos.controller.View1", {
		a: 1,
		b: true,

		onInit: function () {

		},

		onPress: function (x, y, z) {
			console.log(this.a++);
		},

		darNota: function (oEvent) {
			var oParameters = oEvent.getParameters();
			var iNota = oParameters.value;
			alert("Nota: " + iNota);
		},

		ligaDarNota: function (oEvent) {
			var oRatingIndicator = this.byId("rating");
			oRatingIndicator.attachEvent("change", this.darNota);
			var oLigarNota = this.byId("ligarNota");
			oLigarNota.setEnabled(false);
			var oDesligarNota = this.byId("desligarNota");
			oDesligarNota.setEnabled(true);
		},
		desligaDarNota: function (oEvent) {
			var oRatingIndicator = this.byId("rating");
			oRatingIndicator.detachEvent("change", this.darNota);
			var oLigarNota = this.byId("ligarNota");
			oLigarNota.setEnabled(true);
			var oDesligarNota = this.byId("desligarNota");
			oDesligarNota.setEnabled(false);
		}
	});
});