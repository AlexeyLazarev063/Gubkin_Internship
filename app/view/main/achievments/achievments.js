/**
 * This view is an example list of people.
 */
Ext.define('individualAchievments.view.main.achievments.achievments', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlist',

    requires: [
        "individualAchievments.view.main.achievments.achievmentsController",
        'individualAchievments.view.main.achievments.achievmentsModel'
    ],

    title: 'Personnel',

    viewModel: 'datewin',
    controller: 'achievments',

    items:[
        {
            xtype: 'button',
            text: 'CREATE',
            width: 100,
            length: 70,
            margin: 5,
            handler: function() {
                Ext.create('individualAchievments.view.main.achievments.achievmentswindow.achievmentsWin').show()
            }
        },
        {

        store: {
            type: 'personnel'
        },

        listeners: {
            cellclick: 'onItemSelected1'
        },

        xtype:'grid',
        columns: [
            { text: 'ID', dataIndex: 'id'},
            { text: 'Achievment\'s name',  dataIndex: 'name',                                   flex: 1 },
            { text: 'Condition',           dataIndex: 'condition',      menuDisabled:true,      flex: 1 },
            { text: 'Status',              dataIndex: 'status',         menuDisabled:true,      flex: 1 },
            { text: 'Description',         dataIndex: 'description',    menuDisabled:true,      flex: 1 },
            {menuDisabled:true}
                ]
            }],

});
