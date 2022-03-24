Ext.define('individualAchievments.view.main.achievments.AchievmentsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.achievments',

    onItemSelected1: function (item) {
        let gridRecords = item.getSelectionModel().getSelection()[0];

        Ext.create('individualAchievments.view.main.achievments.achievmentsWindow.AchievmentsWin',{
            viewModel:{
                data:{
                    achievments: gridRecords.data
                }
            }
        }).show()
    },

    closeWindow: function(item){
        item.up("ListWin").close();
    }

});