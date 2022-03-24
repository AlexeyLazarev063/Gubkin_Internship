Ext.define('individualAchievments.view.main.achievmentsName.AchievmentsName', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlistName',

    requires: [
        'individualAchievments.view.main.achievmentsName.AchievmentsNameController',
        'individualAchievments.view.main.achievmentsname.AchievmentsNameModel'
    ],

    controller: 'achievmentsName',
    viewModel: 'datewinname',

    title: 'Achievment\'s name',
    items: [
        {
            xtype: 'button',
            text: 'CREATE',
            width: 100,
            length: 70,
            margin: 5,
            handler: 'createWindow2'
        },
        {
            xtype: 'mainlistNameGrid'
        }
    ]

});
