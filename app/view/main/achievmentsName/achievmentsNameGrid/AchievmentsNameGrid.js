Ext.define('individualAchievments.view.main.achievmentsName.achievmentsNameGrid.AchievmentsNameGrid', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlistNameGrid',

    requires: [
        'individualAchievments.view.main.achievmentsName.AchievmentsName',
        'individualAchievments.view.main.achievmentsName.AchievmentsNameController',
    ],

    items:[
        {
            xtype: 'grid',

            store:{
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
                cellclick: 'onItemSelected2'
            }
        }
    ]

});