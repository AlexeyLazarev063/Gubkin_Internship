Ext.define('individualAchievments.store.achievmentsdatewin', {

    extend: 'Ext.data.Store',

    alias: 'store.achievmentsdatewin',

    fields:['id','name', 'status', 'condition'],


    data: [
            { id: 1, name: 'Get a good mark',   status: "Good",             condition: "Get more than 90 points"},
            { id: 2, name: 'Get a bad mark',    status: 'Bad',              condition: "Get less 50 points"},
            { id: 3, name: 'Save a dog',        status: 'In a process',     condition: "Have a receipt"},
            { id: 4, name: 'Save a cat',        status: 'Absolutely zero',  condition: "Eat a cake"}
    ]

});