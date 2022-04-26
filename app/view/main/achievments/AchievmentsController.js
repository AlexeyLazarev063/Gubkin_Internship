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

});