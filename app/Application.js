/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('individualAchievments.Application', {
    extend: 'Ext.app.Application',

    name: 'individualAchievments',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        'individualAchievments.store.AchievmentsDateName',
        'individualAchievments.store.Personnel',
        'individualAchievments.store.AchievmentsDateStatus',
        'individualAchievments.store.AchievmentsDateCondition'
    ],

});

