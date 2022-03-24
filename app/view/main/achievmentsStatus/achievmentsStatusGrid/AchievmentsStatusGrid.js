Ext.define('individualAchievments.view.main.achievmentsStatus.achievmentsStatusGrid.AchievmentsStatusGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlistStatusGrid',

    requires: [
        'individualAchievments.view.main.achievmentsStatus.AchievmentsStatusController',
        'individualAchievments.view.main.achievmentsstatus.AchievmentsStatusModel'
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
            text: 'Status',
            dataIndex: 'status',
            flex: 1
        }
    ],
    listeners: {
        cellclick: 'onItemSelectedAchievmentsStatus'
    },



});