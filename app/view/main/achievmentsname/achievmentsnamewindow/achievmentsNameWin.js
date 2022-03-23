Ext.define('individualAchievments.view.main.achievmentsname.achievmentsnamewindow.achievmentsNameWin', {
    extend: 'Ext.window.Window',
    xtype: 'ListNameWin',

    require:[
        'individualAchievments.store.achievmentsdatewin',
        "individualAchievments.view.main.achievments.achievmentsModel",
        "individualAchievments.view.main.achievmentsname.achievmentsnameModel"
    ],

    title: 'Achievment\'s name',

    viewModel: "datewinname",
    controller: 'achievmentsName',

    modal: true,



    items:[
        {
            margin: 10,
            xtype: 'textfield',
            fieldLabel: 'Наименование достижения',
            labelAlign: 'top',
            width: 600,
            height: 50,
            valueField: 'id',
            emptytext: 'Введите текст',
            store: 'individualAchievments.store.achievmentsdatewin',
            displayField: 'condition',
            valueField: 'id',
            bind: {
                value: '{achievments.name}'
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
