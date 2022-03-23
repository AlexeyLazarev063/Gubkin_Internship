Ext.define('individualAchievments.view.main.achievments.achievmentsconditionController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.achievmentsCond',

    onItemSelected4: function (item) {

        let gridRecords = item.getSelectionModel().getSelection()[0];

        Ext.create('individualAchievments.view.main.achievmentscondition.achievmentsconditionwindow.achievmentsCondWin', {
            viewModel:{
                data:{
                    achievments: gridRecords.data
                }
            }
        }).show()
    },

    closeWindow: function(item){
        item.up("mainlistCond").close();
    }

});