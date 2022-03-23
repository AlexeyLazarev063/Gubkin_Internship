Ext.define('individualAchievments.view.main.achievmentsstatus.achievmentsstatuswindow.achievmentsStatusWin', {
    extend: 'Ext.window.Window',
    xtype: 'ListStatusWin',

    require:[
        'individualAchievments.store.achievmentsdatewin',
        "individualAchievments.view.main.achievmentsstatus.achievmentsstatusModel"
    ],

    title: 'Status',

    viewModel: "datewinstatus",
    controller: 'achievmentsStatus',

    modal: true,



    items:[
        {
            margin: 10,
            xtype:'textfield',
            fieldLabel:'Статус достижения',
            labelAlign: 'top',
            width: 600,
            height: 50,
            emptytext: 'Введите текст',
            store: 'individualAchievments.view.main.achievments.achievmentsdatewin',
            displayField: 'status',
            valueField: 'id',
            bind: {
                value: '{achievments.status}'
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