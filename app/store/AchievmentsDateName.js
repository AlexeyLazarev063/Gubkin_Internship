Ext.define('individualAchievments.store.AchievmentsDateName', {

    extend: 'Ext.data.Store',

    alias: 'store.achievmentsdatewin',

    fields: [
        {name: 'AchievmentsNameId', type: 'int'},
        {name: 'AchievmentsName', type: 'string'}
    ],

    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/List/getAchievmentsName',
        reader: {
            type: 'json',
        }
    },

    autoLoad: true,

});