Ext.define('individualAchievments.view.main.achievmentsStatus.achievmentsStatusGrid.AchievmentsStatusGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlistStatusGrid',
    itemId: 'AchievmentsStatusGrid',
    id: 'AchievmentsStatusGridId',

    requires: [
        'individualAchievments.view.main.achievmentsStatus.AchievmentsStatusController',
        'individualAchievments.view.main.achievmentsstatus.AchievmentsStatusModel'
    ],

    store: 'individualAchievments.store.AchievmentsDateStatus',

    columns: [
        {
            xtype:'rownumberer',
        },
        {
            text: 'ID',
            dataIndex: 'AchievmentsStatusId'
        },
        {
            text: 'Status',
            dataIndex: 'AchievmentsStatus',
            flex: 1
        }
    ],
    listeners: {
        cellclick: 'onItemSelectedAchievmentsStatus'
    },



});