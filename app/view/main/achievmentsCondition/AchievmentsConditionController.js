Ext.define('individualAchievments.view.main.achievmentsCondition.AchievmentsConditionController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.achievmentsCond',

    onItemSelected4: function (item) {

        let gridRecords = item.getSelectionModel().getSelection()[0];

        Ext.create('individualAchievments.view.main.achievmentsCondition.achievmentsConditionWindow.AchievmentsConditionWin', {
            viewModel:{
                data:{
                    achievments: gridRecords.data
                }
            }
        }).show()
    },

    closeWindow4: function(item){
        item.up("window").close();
    }

});