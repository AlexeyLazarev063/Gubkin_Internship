Ext.define('individualAchievments.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'status', 'condition'
    ],

    data: { items: [
        { name: 'Get a good mark',                  status: "Good",         condition: "Have more than 90 points"},
        { name: 'Take a part in a competition',     status: "Not good",     condition: "Have less than 50 points"},
        { name: 'Became a good specialist',         status: "Bad",          condition: "Have a diploma"},
        { name: 'Save a cat',                       status: "Absolutely 0", condition: "Call firemans"}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
