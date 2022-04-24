Ext.define('individualAchievments.view.main.achievmentsName.achievmentsNameGrid.AchievmentsNameGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlistNameGrid',
    itemId: 'AchievmentsNameGrid',

    requires: [
        'individualAchievments.view.main.achievmentsName.AchievmentsNameController',
        'individualAchievments.view.main.achievmentsname.AchievmentsNameModel'
    ],

    store: 'individualAchievments.store.AchievmentsDateName',

    columns: [
        {
            xtype:'rownumberer',
        },
        {
            text: 'ID',
            dataIndex: 'AchievmentsNameId',

        },
        {
            text: 'Name',
            dataIndex: 'AchievmentsName',
            flex: 1
        }
    ],

    listeners: {

        cellclick: 'onItemSelectedAchievmentsName',
    }

});