Ext.define('individualAchievments.view.main.achievmentsStatus.AchievmentsStatusController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.achievmentsStatus',

    onItemSelectedAchievmentsStatus: function (item) {
        let gridRecords = item.getSelectionModel().getSelection()[0];

        Ext.create('individualAchievments.view.main.achievmentsStatus.achievmentsStatusWindow.AchievmentsStatusWin', {
            viewModel: {
                data: {
                    achievments: gridRecords.data
                }
            }
        }).show()
    },

    closeWindowAchievmentsStatus: function(item) {
        item.up("window").close();
    },

    createWindowAchievmentsStatus: function() {
        Ext.create('individualAchievments.view.main.achievmentsStatus.achievmentsStatusWindow.AchievmentsStatusWin').show()
    },

    addInfoAchievmentsStatus: function() {

    }

});