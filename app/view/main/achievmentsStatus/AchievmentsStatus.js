Ext.define('individualAchievments.view.main.achievmentsStatus.AchievmentsStatus', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlistStatus',

    requires: [
        'individualAchievments.view.main.achievmentsStatus.AchievmentsStatusController',
        'individualAchievments.view.main.achievmentsstatus.AchievmentsStatusModel'
    ],

    controller: 'achievmentsStatus',
    viewModel: 'datewinstatus',

    title: 'Achievment\'s status',
    items: [
        {
            xtype: 'button',
            text: 'CREATE',
            width: 100,
            length: 70,
            margin: 5,
            handler: 'createWindow3'
        },
        {
            xtype: 'mainlistStatusGrid'
        }
    ],


});