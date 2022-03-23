Ext.define('individualAchievments.view.main.achievmentsstatus.achievmentsStatus', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlistStatus',

    requires: [
        'individualAchievments.store.Personnel'
    ],

    title: 'Achievment\'s status',

    controller: 'achievmentsStatus',
    viewModel:'datewinstatus',

    store: {
        type: 'personnel'
    },

    items:[{
        width: 100,
        length: 70,
        margin: 5,
        xtype: 'button',
        text: 'CREATE',
        handler: function(){
            Ext.create('individualAchievments.view.main.achievmentsstatus.achievmentsstatuswindow.achievmentsStatusWin').show()

        }
    },{
        listeners: {
            cellclick: 'onItemSelected3'
        },

        store:{
            type: 'personnel'
        },
        xtype: 'grid',
        columns: [
            { text: 'ID',  dataIndex: 'id' },
            { text: 'Status', dataIndex: 'status', flex: 1 }],
    }],


});