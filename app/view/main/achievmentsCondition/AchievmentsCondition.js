Ext.define('individualAchievments.view.main.achievmentsCondition.AchievmentsCondition', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlistCond',

    requires: [
        'individualAchievments.view.main.achievmentsCondition.AchievmentsConditionController',
        'individualAchievments.view.main.achievmentsCondition.AchievmentsConditionModel'
    ],

    controller: 'achievmentsCond',
    viewModel: 'achievmentsCond',

    title: 'Achievment\'s conditions',
    store: {
        type: 'personnel'
    },

    items:[
        {
            xtype: 'button',
            text: 'CREATE',
            width: 100,
            length: 70,
            margin: 5,
            handler: 'createWindowAchievmentsCondition'
        },
        {
            xtype: 'mainlistCondGrid'
        }
    ],


});