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

});