Ext.define('individualAchievments.view.main.achievmentsName.AchievmentsNameController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.achievmentsName',

    onItemSelectedAchievmentsName: function (item) {
        let gridRecords = item.getSelectionModel().getSelection()[0];

        Ext.create('individualAchievments.view.main.achievmentsName.achievmentsNameWindow.AchievmentsNameWin',{
            viewModel: {
                data: {
                    achievments: gridRecords.data
                }
            }
        }).show()
    },

    closeWindowAchievmentsName: function(item) {
        item.up("window").close();
    },

    createWindowAchievmentsName: function() {
        Ext.create('individualAchievments.view.main.achievmentsName.achievmentsNameWindow.AchievmentsNameWin').show()
    },

    addInfoAchievmentsName: function() {

    }
});