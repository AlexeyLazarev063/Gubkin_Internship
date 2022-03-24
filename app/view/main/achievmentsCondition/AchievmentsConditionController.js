Ext.define('individualAchievments.view.main.achievmentsCondition.AchievmentsConditionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.achievmentsCond',

    onItemSelectedAchievmentsCondition: function (item) {

        let gridRecords = item.getSelectionModel().getSelection()[0];

        Ext.create('individualAchievments.view.main.achievmentsCondition.achievmentsConditionWindow.AchievmentsConditionWin', {
            viewModel: {
                data: {
                    achievments: gridRecords.data
                }
            }
        }).show()
    },

    closeWindowAchievmentsCondition: function(item) {
        item.up("window").close();
    },

    createWindowAchievmentsCondition: function() {
        Ext.create('individualAchievments.view.main.achievmentsCondition.achievmentsConditionWindow.AchievmentsConditionWin').show()
    },

    addInfoAchievmentsCondition: function() {

    }

});