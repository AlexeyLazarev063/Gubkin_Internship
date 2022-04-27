Ext.define('individualAchievments.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',
    model: 'individualAchievments.app.model.PersonnelModel',

    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/List/getAchievmentsMain',
        reader: {
            type: 'json',

        }
    },

    autoLoad: true,

});
