Ext.define('individualAchievments.view.main.achievmentscondition.achievmentsconditionwindow.achievmentsCondWin', {
    extend: 'Ext.window.Window',
    xtype: 'ListCondWin',

    require:[
        'individualAchievments.store.achievmentsdatewin',
        "individualAchievments.view.main.achievments.achievmentsModel",
        "individualAchievments.view.main.achievmentscondition.achievmentsconditionModel"
    ],

    title: 'Condition',

    viewModel: "datewincond",
    controller: 'achievmentsCond',

    modal: true,





    items:[
        {
            margin: 10,
            xtype: 'textfield',
            fieldLabel:'Условие',
            labelAlign: 'top',
            width: 600,
            height: 50,
            emptytext: 'Введите текст',
            store: 'individualAchievments.store.achievmentsdatewin',
            displayField: 'name',
            valueField: 'id',
            bind: {
                value: '{achievments.condition}'
            }
        }
    ],
    buttons: [{

        text: 'Добавить',
        handler: function() {


        }
    },{
        text: 'Cancel',
        handler: function () {
            this.up('window').close();
        }
    }]

});