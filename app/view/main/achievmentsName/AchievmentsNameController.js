Ext.define('individualAchievments.view.main.achievmentsName.AchievmentsNameController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.achievmentsName',

    onItemSelectedAchievmentsName: function (grid) {

        let gridRecords = grid.getSelectionModel().getSelection()[0].data;
        gridRecords['update'] = false;
        gridRecords['create'] = true;
        gridRecords['delete'] = false;

        Ext.create('individualAchievments.view.main.achievmentsName.achievmentsNameWindow.AchievmentsNameWin',{
            viewModel: {
                data: {
                   achievments: gridRecords
                }
            }
        }).show()
    },

    closeWindowAchievmentsName: function(grid) {
        grid.up("#AchievmentsNameWin").close();
    },

    createWindowAchievmentsName: function() {
        let gridRecords = {
            'update': true,
            'create': false,
            'delete': true,
        };

        Ext.create('individualAchievments.view.main.achievmentsName.achievmentsNameWindow.AchievmentsNameWin',{
            viewModel: {
                data: {
                    achievments: gridRecords
                }
            }
        }).show()
    },

    addInfoAchievmentsName: function(grid) {
        var newName = Ext.ComponentQuery.query('textfield[name = "achievmentsNameField"]')[0].getValue();

        Ext.Ajax.request({
            url: `http://127.0.0.1:8000/List/createName`,
            params:{
                newName: newName
            },
            success: function(){
                Ext.ComponentQuery.query('#AchievmentsNameGrid')[0].getStore().reload();

            }
        });
        grid.up("#AchievmentsNameWin").close();
    },

    deleteInfoAchievmentsName: function(grid){

        let id = grid.up('#AchievmentsNameWin').getViewModel().get('achievments').AchievmentsNameId;

        Ext.Ajax.request({
            url: `http://127.0.0.1:8000/List/deleteName`,
            params:{
                id: id
            },
            success: function(){
                Ext.ComponentQuery.query('#AchievmentsNameGrid')[0].getStore().reload();

            }
        });
        grid.up("#AchievmentsNameWin").close();
    },

    uploadInfoAchievmentsName: function(grid){

        let id = grid.up('#AchievmentsNameWin').getViewModel().get('achievments').AchievmentsNameId;
        let newName = Ext.ComponentQuery.query('textfield[name = "achievmentsNameField"]')[0].getValue();

        Ext.Ajax.request({
            url: `http://127.0.0.1:8000/List/createName`,
            params:{
                id: id,
                newName: newName
            },
            success: function(){
                Ext.ComponentQuery.query('#AchievmentsNameGrid')[0].getStore().reload();

            }
        });
        grid.up("#AchievmentsNameWin").close();
    }
});