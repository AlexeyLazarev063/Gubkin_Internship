Ext.define('individualAchievments.view.main.achievmentscondition.achievmentsCond', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlistCond',

    requires: [
        'individualAchievments.view.main.achievments.achievmentsconditionController',
        'individualAchievments.view.main.achievmentscondition.achievmentsconditionModel'
    ],

    controller: 'achievmentsCond',
    viewModel: 'achievmentsCond',

    title: 'Achievment\'s conditions',
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
            Ext.create('individualAchievments.view.main.achievmentscondition.achievmentsconditionwindow.achievmentsCondWin').show()

                            }
            },{

        store:{
            type: 'personnel'
        },

        listeners: {
            cellclick: 'onItemSelected4'
        },

        xtype: 'grid',
        columns: [
            { text: 'ID',  dataIndex: 'id' },
            { text: 'Condition', dataIndex: 'condition', flex: 1 }],
    }],


});