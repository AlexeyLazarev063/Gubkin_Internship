Ext.define('individualAchievments.view.main.achievmentsName.achievmentsNameGrid.AchievmentsNameGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlistNameGrid',

    requires: [
        'individualAchievments.view.main.achievmentsName.AchievmentsNameController',
        'individualAchievments.view.main.achievmentsname.AchievmentsNameModel'
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
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        }
    ],
    listeners: {
        cellclick: 'onItemSelectedAchievmentsName'
    }

});