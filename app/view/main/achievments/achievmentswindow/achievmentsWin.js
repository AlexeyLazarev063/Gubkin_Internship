Ext.define('individualAchievments.view.main.achievments.achievmentswindow.achievmentsWin', {
    extend: 'Ext.window.Window',
    xtype: 'ListWin',

    require:[
        'individualAchievments.store.achievmentsdatewin',
        'individualAchievments.view.main.achievments.achievmentsModel'
    ],



    title: 'Achievments',

    viewmodel: 'datewin',
    controller: 'achievments',

    modal: true,
    items:[
        {
            xtype: 'combo',
            fieldLabel:'Наименование достижения',
            width: 700,
            margin:10,
            store: 'individualAchievments.store.achievmentsdatewin',
            displayField: 'name',
            valueField: 'id',
            bind: {
                value: '{achievments.name}'
            }

        },{
            xtype: 'combo',
            fieldLabel:'Статус достижения',
            width: 700,
            margin:10,
            displayField: 'status',
            valueField: 'id',
            store: 'individualAchievments.store.achievmentsdatewin',
            bind: {
                value: '{achievments.status}'
            }
        },{
            xtype: 'combo',
            fieldLabel:'Условие достижения',
            width: 700,
            margin:10,
            store: 'individualAchievments.store.achievmentsdatewin',
            displayField: 'condition',
            valueField: 'id',
            bind: {
                value: '{achievments.condition}'
            }
        },{
            xtype:'textfield',
            fieldLabel:'Описание',
            labelAlign: 'top',
            margin: 10,
            width:700

        }
    ],
    buttons: [{

        text: 'Добавить',
        handler: function() {


        }
    },{
        text: 'Cancel',
        //handler: 'closewindow'
        handler: function (){
            this.up('ListWin').close()
        }
    }]

});