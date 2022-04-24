Ext.define('individualAchievments.view.main.achievmentsCondition.AchievmentsConditionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.achievmentsCond',

    onItemSelectedAchievmentsCondition: function (grid) {
        let gridRecords = grid.getSelectionModel().getSelection()[0].data;
        gridRecords['update'] = false;
        gridRecords['create'] = true;
        gridRecords['delete'] = false;

        Ext.create('individualAchievments.view.main.achievmentsCondition.achievmentsConditionWindow.AchievmentsConditionWin', {
            viewModel: {
                data: {
                    achievments: gridRecords
                }
            }
        }).show()
    },

    closeWindowAchievmentsCondition: function(grid) {
        grid.up("#AchievmentsConditionWin").close();
    },

    createWindowAchievmentsCondition: function() {
        let gridRecords = {
            'update': true,
            'create': false,
            'delete': true,
        };

        Ext.create('individualAchievments.view.main.achievmentsCondition.achievmentsConditionWindow.AchievmentsConditionWin',{
            viewModel: {
                data: {
                    achievments: gridRecords
                }
            }
        }).show()
    },

    addInfoAchievmentsCondition: function(grid) {
        var newCondition = Ext.ComponentQuery.query('textfield[name = "AchievmentsConditionField"]')[0].getValue();

        Ext.Ajax.request({
            url: `http://127.0.0.1:8000/List/createCondition`,
            params:{
                newCondition: newCondition
            },
            success: function(){
                Ext.ComponentQuery.query('#AchievmentsConditionGrid')[0].getStore().reload();

            }
        });
        grid.up("#AchievmentsConditionWin").close();

    },

    deleteInfoAchievmentsCondition: function(grid, rowIndex, colIndex){

        let id = grid.up('#AchievmentsConditionWin').getViewModel().get('achievments').AchievmentsConditionId;

        Ext.Ajax.request({
            url: `http://127.0.0.1:8000/List/deleteCondition`,
            params:{
                id: id
            },
            success: function(){
                Ext.ComponentQuery.query('#AchievmentsConditionGrid')[0].getStore().reload();

            }
        });
        grid.up("#AchievmentsConditionWin").close();
    },

    updateInfoAchievmentsCondition: function(grid, rowIndex, colIndex){

        let id = grid.up('#AchievmentsConditionWin').getViewModel().get('achievments').AchievmentsConditionId;
        let newCondition = Ext.ComponentQuery.query('textfield[name = "AchievmentsConditionField"]')[0].getValue();
        Ext.Ajax.request({
            url: `http://127.0.0.1:8000/List/createCondition`,
            params:{
                id: id,
                newCondition: newCondition
            },
            success: function(){
                Ext.ComponentQuery.query('#AchievmentsConditionGrid')[0].getStore().reload();

            }
        });
        grid.up("#AchievmentsConditionWin").close();
    }

});