Ext.define('individualAchievments.view.main.achievmentsGrid.AchievmentsGrid', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlistGrid',

    requires: [
        'individualAchievments.view.main.achievments.Achievments',
        'individualAchievments.view.main.achievments.AchievmentsController'
    ],

    items:[
        {
            xtype:'grid',
            store: {
                type: 'personnel'
            },
            columns: [
                {
                    text: 'ID',
                    dataIndex: 'id'
                },
                {
                    text: 'Achievment\'s name',
                    dataIndex: 'name',
                    flex: 1
                },
                {
                    text: 'Condition',
                    dataIndex: 'condition',
                    flex: 1,
                    menuDisabled:true
                },
                {
                    text: 'Status',
                    dataIndex: 'status',
                    flex: 1,
                    menuDisabled:true
                },
                {
                    text: 'Description',
                    dataIndex: 'description',
                    flex: 1,
                    menuDisabled:true
                },
                {
                    menuDisabled:true
                }
            ],
            listeners: {
                cellclick: 'onItemSelected1'
            },
        }
    ],

});