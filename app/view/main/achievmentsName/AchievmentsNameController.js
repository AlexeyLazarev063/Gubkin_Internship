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

});