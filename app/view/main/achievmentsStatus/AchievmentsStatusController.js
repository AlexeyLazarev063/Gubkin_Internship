Ext.define('individualAchievments.view.main.achievmentsStatus.AchievmentsStatusController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.achievmentsStatus',

    onItemSelected3: function (item) {
        let gridRecords = item.getSelectionModel().getSelection()[0];

        Ext.create('individualAchievments.view.main.achievmentsStatus.achievmentsStatusWindow.AchievmentsStatusWin', {
            viewModel: {
                data: {
                    achievments: gridRecords.data
                }
            }
        }).show()
    },

    closeWindow3: function(item) {
        item.up("window").close();
    },

    createWindow3: function() {
        Ext.create('individualAchievments.view.main.achievmentsStatus.achievmentsStatusWindow.AchievmentsStatusWin').show()
    },

    addInfo3: function() {

    }

});