Ext.define('individualAchievments.view.main.achievmentsCondition.achievmentsConditionGrid.AchievmentsConditionGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlistCondGrid',

    requires: [
        'individualAchievments.view.main.achievmentsCondition.AchievmentsConditionController'
    ],

    store: {
        type: 'personnel'
    },

    columns: [
        {
            text: 'ID',
            dataIndex: 'id'
        },
        {
            text: 'Condition',
            dataIndex: 'condition',
            flex: 1
        }
    ],

    listeners: {
        cellclick: 'onItemSelected4'
    }




});