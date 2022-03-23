Ext.define('individualAchievments.view.main.achievmentsname.achievmentsName', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlistName',

    requires: [
        'individualAchievments.store.Personnel'

    ],

    title: 'Achievment\'s name',

    controller: 'achievmentsName',
    viewModel: 'datewinname',

    store: {
        type: 'personnel'
    },

    items:[
        {
            width: 100,
            length: 70,
            margin: 5,
            xtype: 'button',
            text: 'CREATE',
            handler: function(){
                Ext.create('individualAchievments.view.main.achievmentsname.achievmentsnamewindow.achievmentsNameWin').show()

            }
        },
        {
            store:{
                type: 'personnel'
            },
            xtype: 'grid',
            columns: [
                { text: 'ID',  dataIndex: 'id' },
                { text: 'Name', dataIndex: 'name', flex: 1 }
            ],
            listeners: {
                cellclick: 'onItemSelected2'
            }
        }
    ]

});
