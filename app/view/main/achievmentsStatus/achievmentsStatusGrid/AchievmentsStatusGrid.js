Ext.define('individualAchievments.view.main.achievmentsStatus.achievmentsStatusGrid.AchievmentsStatusGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlistStatusGrid',

    requires: [
        'individualAchievments.view.main.achievmentsStatus.AchievmentsStatusController'
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
        cellclick: 'onItemSelected3'
    },



});