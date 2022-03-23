Ext.define('individualAchievments.view.main.achievmentsstatus.achievmentsstatusController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.achievmentsStatus',

    onItemSelected3: function (item) {

        let gridRecords = item.getSelectionModel().getSelection()[0];

        Ext.create('individualAchievments.view.main.achievmentsstatus.achievmentsstatuswindow.achievmentsStatusWin', {
            viewModel:{
                data:{
                    achievments: gridRecords.data
                }
            }
        }).show()
    },

    closeWindow: function(item){
        item.up("mainlistStatus").close();
    }

});