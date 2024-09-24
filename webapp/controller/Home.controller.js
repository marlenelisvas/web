sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",

],
function (Controller, MessageToast, MessageBox,JSONModel) {
    "use strict";

    return Controller.extend("com.xtendhr.web.controller.Home", {
        onInit: function () {
            //crear JSON MODEL
            var oModel = new JSONModel();
            oModel.loadData("/localdata/data.json")			
			this.getView().setModel(oModel, "Information");
        },
        onClick:function(oEvent){
            MessageToast.show("Click");
            MessageBox.show(
                "This message should appear in the message box.", {
                    icon: MessageBox.Icon.INFORMATION,
                    title: "My message box title",
                    actions: [MessageBox.Action.YES, MessageBox.Action.NO],
                    emphasizedAction: MessageBox.Action.YES,
                    onClose: function (oAction) { / * do something * / }
                }
            );

        }
    });
});
