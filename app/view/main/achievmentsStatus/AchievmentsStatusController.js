Ext.define('individualAchievments.view.main.achievmentsStatus.AchievmentsStatusController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.achievmentsStatus',

    onItemSelectedAchievmentsStatus: function (grid) {
        let gridRecords = grid.getSelectionModel().getSelection()[0].data;
        gridRecords['update'] = false;
        gridRecords['create'] = true;
        gridRecords['delete'] = false;

        Ext.create('individualAchievments.view.main.achievmentsStatus.achievmentsStatusWindow.AchievmentsStatusWin', {
            viewModel: {
                data: {
                    achievments: gridRecords
                }
            }
        }).show()
    },

    closeWindowAchievmentsStatus: function(grid) {
        grid.up('#AchievmentsStatusWin').close();
    },

    createWindowAchievmentsStatus: function() {
        let gridRecords = {
            'update': true,
            'create': false,
            'delete': true,
        };

        Ext.create('individualAchievments.view.main.achievmentsStatus.achievmentsStatusWindow.AchievmentsStatusWin',{
            viewModel: {
                data: {
                    achievments: gridRecords
                }
            }
        }).show()
    },

    addInfoAchievmentsStatus: function(grid) {
        var newStatus = Ext.ComponentQuery.query('textfield[name = "achievmentsStatusField"]')[0].getValue();

        Ext.Ajax.request({
            url: `http://127.0.0.1:8000/List/createStatus`,
            params:{
                newStatus: newStatus
            },
            success: function(){
                Ext.ComponentQuery.query('#AchievmentsStatusGrid')[0].getStore().reload();

            }
        });
        grid.up("#AchievmentsStatusWin").close();
    },

    deleteInfoAchievmentsStatus: function(grid, rowIndex, colIndex){

        let id = grid.up('#AchievmentsStatusWin').getViewModel().get('achievments').AchievmentsStatusId;

        Ext.Ajax.request({
            url: `http://127.0.0.1:8000/List/deleteStatus`,
            params:{
                id: id
            },
            success: function(){
                Ext.ComponentQuery.query('#AchievmentsStatusGrid')[0].getStore().reload();

            }
        });
        grid.up("#AchievmentsStatusWin").close();
    },

    updateInfoAchievmentsStatus: function(grid, rowIndex, colIndex){

        let id = grid.up('#AchievmentsStatusWin').getViewModel().get('achievments').AchievmentsStatusId;
        let newName = Ext.ComponentQuery.query('textfield[name = "achievmentsStatusField"]')[0].getValue();

        Ext.Ajax.request({
            url: `http://127.0.0.1:8000/List/createStatus`,
            params:{
                id: id,
                newStatus: newName
            },
            success: function(){
                Ext.ComponentQuery.query('#AchievmentsStatusGrid')[0].getStore().reload();

            }
        });
        grid.up("#AchievmentsStatusWin").close();
    }

});