/**
 * This view is an example list of people.
 */
Ext.define('individualAchievments.view.main.achievments.Achievments', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlist',

    requires: [
        "individualAchievments.view.main.achievments.AchievmentsController",
        'individualAchievments.view.main.achievments.AchievmentsModel'
    ],



    viewModel: 'datewin',
    controller: 'achievments',

    title: 'Personnel',
    items:[
        {
            xtype: 'button',
            text: 'CREATE',
            width: 100,
            length: 70,
            margin: 5,
            handler: function() {
                Ext.create('individualAchievments.view.main.achievments.achievmentsWindow.AchievmentsWin').show()
            }
        },
        {
            xtype: 'mainlistGrid'
        }
    ],

});
