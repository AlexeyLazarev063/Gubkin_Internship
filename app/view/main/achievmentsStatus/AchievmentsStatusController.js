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

});