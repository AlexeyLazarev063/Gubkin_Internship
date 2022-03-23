Ext.define('individualAchievments.view.main.achievments.achievmentsnameController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.achievmentsName',

    onItemSelected2: function (item) {

        let gridRecords = item.getSelectionModel().getSelection()[0];

        Ext.create('individualAchievments.view.main.achievmentsname.achievmentsnamewindow.achievmentsNameWin',{
            viewModel:{
                data:{
                    achievments: gridRecords.data
                }
            }
        }).show()
    },

    closeWindow: function(item){
        item.up("mainlistName").close();
    }



});