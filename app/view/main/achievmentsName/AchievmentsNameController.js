Ext.define('individualAchievments.view.main.achievmentsName.AchievmentsNameController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.achievmentsName',

    onItemSelected2: function (item) {

        let gridRecords = item.getSelectionModel().getSelection()[0];

        Ext.create('individualAchievments.view.main.achievmentsName.achievmentsNameWindow.AchievmentsNameWin',{
            viewModel:{
                data:{
                    achievments: gridRecords.data
                }
            }
        }).show()
    },

    closeWindow2: function(item){
        item.up("window").close();
    }



});