Ext.define('individualAchievments.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        {name: 'AchievmentsId', type: 'int'},
        {name: 'AchievmentsNameMain', type: 'string'},
        {name: 'AchievmentsStatusMain', type: 'string'},
        {name: 'AchievmentsConditionMain', type: 'string'},
        {name: 'AchievmentsDescriptionMain', type: 'string'}
    ],

    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/List/getAchievmentsMain',
        reader: {
            type: 'json',

        }
    },

    autoLoad: true,

});
