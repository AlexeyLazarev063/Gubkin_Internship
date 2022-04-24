Ext.define('individualAchievments.store.AchievmentsDateCondition', {

    extend: 'Ext.data.Store',

    alias: 'store.achievmentsdatecondition',

     fields: [
         {name: 'AchievmentsConditionId', type: 'int'},
         {name: 'AchievmentsCondition', type: 'string'}
     ],

    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/List/getAchievmentsCondition',
        reader: {
            type: 'json',
        }
    },

    autoLoad: true,

});