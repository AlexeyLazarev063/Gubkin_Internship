Ext.define('individualAchievments.store.AchievmentsDateName', {
    extend: 'Ext.data.Store',
    alias: 'store.achievmentsdatewin',
    model:'individualAchievments.app.model.AchievmentsDateNameModel',

    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/List/getAchievmentsName',
        reader: {
            type: 'json',
        }
    },

    autoLoad: true,

});