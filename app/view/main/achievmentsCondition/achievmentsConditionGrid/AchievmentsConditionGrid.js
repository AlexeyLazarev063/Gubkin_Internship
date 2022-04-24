Ext.define('individualAchievments.view.main.achievmentsCondition.achievmentsConditionGrid.AchievmentsConditionGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlistCondGrid',
    itemId: 'AchievmentsConditionGrid',

    requires: [
        'individualAchievments.view.main.achievmentsCondition.AchievmentsConditionController',
        'individualAchievments.view.main.achievmentsCondition.AchievmentsConditionModel'
    ],

    store: 'individualAchievments.store.AchievmentsDateCondition',

    columns: [
        {
            xtype:'rownumberer',
        },
        {
            text: 'ID',
            dataIndex: 'AchievmentsConditionId'
        },
        {
            text: 'Condition',
            dataIndex: 'AchievmentsCondition',
            flex: 1
        }
    ],

    listeners: {
        cellclick: 'onItemSelectedAchievmentsCondition'
    }




});