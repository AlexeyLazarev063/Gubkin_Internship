Ext.define('individualAchievments.view.main.achievments.AchievmentsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.achievments',

    onItemSelectedAchievments: function (item) {
        let gridRecords = item.getSelectionModel().getSelection()[0];

        Ext.create('individualAchievments.view.main.achievments.achievmentsWindow.AchievmentsWin',{
            viewModel: {
                data: {
                    achievments: gridRecords.data
                }
            }
        }).show()
    },

    closeWindowAchievments: function(item) {
        item.up("ListWin").close();
    },

    createWindowAchievments: function() {
        Ext.create('individualAchievments.view.main.achievments.achievmentsWindow.AchievmentsWin').show()
    },

    addInfoAchievments: function() {

    }

});