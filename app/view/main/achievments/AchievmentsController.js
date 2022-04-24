Ext.define('individualAchievments.view.main.achievments.AchievmentsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.achievments',

    onItemSelectedAchievments: function (grid) {
        let gridRecords = grid.getSelectionModel().getSelection()[0].data;
        gridRecords['update'] = false;
        gridRecords['create'] = true;
        gridRecords['delete'] = false;

        Ext.create('individualAchievments.view.main.achievments.achievmentsWindow.AchievmentsWin',{
            viewModel: {
                data: {
                    achievments: gridRecords
                }
            }
        }).show()
    },

    closeWindowAchievments: function(grid) {
        grid.up('#AchievmentsWin',).close();
    },

    createWindowAchievments: function() {
        let gridRecords = {
            'update': true,
            'create': false,
            'delete': true,
        };

        Ext.create('individualAchievments.view.main.achievments.achievmentsWindow.AchievmentsWin',{
            viewModel: {
                data: {
                    achievments: gridRecords
                }
            }
        }).show()
    },

    addInfoAchievments: function(grid) {
        var newAchievmentsName = Ext.ComponentQuery.query('textfield[name = "achievmentsNField"]')[0].getValue();
        var newAchievmentsStatus = Ext.ComponentQuery.query('textfield[name = "achievmentsSField"]')[0].getValue();
        var newAchievmentsCondition = Ext.ComponentQuery.query('textfield[name = "achievmentsCField"]')[0].getValue();
        var newAchievmentsDescription = Ext.ComponentQuery.query('textfield[name = "achievmentsDField"]')[0].getValue();

        Ext.Ajax.request({
            url: `http://127.0.0.1:8000/List/createAchievments`,
            params:{
                newAchievmentsName: newAchievmentsName,
                newAchievmentsStatus: newAchievmentsStatus,
                newAchievmentsCondition: newAchievmentsCondition,
                newAchievmentsDescription: newAchievmentsDescription
            },
            success: function(){
                Ext.ComponentQuery.query('#AchievmentsGrid')[0].getStore().reload();

            }
        });
        grid.up("#AchievmentsWin").close();
    },

    deleteInfoAchievments: function(grid) {
        let id = grid.up('#AchievmentsWin').getViewModel().get('achievments').AchievmentsId;

        Ext.Ajax.request({
            url: `http://127.0.0.1:8000/List/deleteAchievments`,
            params:{
                id: id
            },
            success: function(){
                Ext.ComponentQuery.query('#AchievmentsGrid')[0].getStore().reload();

            }
        });
        grid.up("#AchievmentsWin").close();
    },

    updateInfoAchievments: function(grid, rowIndex, colIndex){
        let id = grid.up('#AchievmentsWin').getViewModel().get('achievments').AchievmentsId;
        var newAchievmentsName = Ext.ComponentQuery.query('textfield[name = "achievmentsNField"]')[0].getValue();
        var newAchievmentsStatus = Ext.ComponentQuery.query('textfield[name = "achievmentsSField"]')[0].getValue();
        var newAchievmentsCondition = Ext.ComponentQuery.query('textfield[name = "achievmentsCField"]')[0].getValue();
        var newAchievmentsDescription = Ext.ComponentQuery.query('textfield[name = "achievmentsDField"]')[0].getValue();

        Ext.Ajax.request({
            url: `http://127.0.0.1:8000/List/createAchievments`,
            params:{
                id: id,
                newAchievmentsName: newAchievmentsName,
                newAchievmentsStatus: newAchievmentsStatus,
                newAchievmentsCondition: newAchievmentsCondition,
                newAchievmentsDescription: newAchievmentsDescription
            },
            success: function(){
                Ext.ComponentQuery.query('#AchievmentsGrid')[0].getStore().reload();

            }
        });
        grid.up("#AchievmentsWin").close();
    }

});