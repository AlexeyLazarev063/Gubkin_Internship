Ext.define('individualAchievments.store.AchievmentsDateStatus', {
    extend: 'Ext.data.Store',
    alias: 'store.achievmentsdatestatus',
    model: 'individualAchievments.app.model.AchievmentsDateStatusModel',

    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/List/getAchievmentsStatus',
        reader: {
            type: 'json',
        }
    },

    autoLoad: true

});