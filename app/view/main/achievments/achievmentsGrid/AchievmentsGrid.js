Ext.define('individualAchievments.view.main.achievmentsGrid.AchievmentsGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlistGrid',
    itemId: 'AchievmentsGrid',
    id: 'AchievmentsGridId',

    requires: [
        'individualAchievments.view.main.achievments.AchievmentsController',
        'individualAchievments.view.main.achievments.AchievmentsModel'
    ],

    store: 'individualAchievments.store.Personnel',

    columns: [
        {
            xtype:'rownumberer',
        },
        {
            text: 'ID',
            dataIndex: 'AchievmentsId'
        },
        {
            text: 'Achievment\'s name',
            dataIndex: 'AchievmentsNameMain',
            flex: 1,

        },
        {
            text: 'Condition',
            dataIndex: 'AchievmentsConditionMain',
            flex: 1,
            menuDisabled:true
        },
        {
            text: 'Status',
            dataIndex: 'AchievmentsStatusMain',
            flex: 1,
            menuDisabled:true
        },
        {
            text: 'Description',
            dataIndex: 'AchievmentsDescriptionMain',
            flex: 1,
            menuDisabled:true
        }
    ],
    listeners: {
        cellclick: 'onItemSelectedAchievments'
    }

});