Ext.define('individualAchievments.view.main.achievments.achievmentsWindow.AchievmentsWin', {
    extend: 'Ext.window.Window',
    xtype: 'ListWin',

    require: [
        'individualAchievments.view.main.achievments.AchievmentsModel',
        'individualAchievments.view.main.achievments.AchievmentsController'
    ],

    viewmodel: 'datewin',
    controller: 'achievments',

    title: 'Achievments',
    modal: true,
    items: [
        {
            xtype: 'combo',
            fieldLabel:'Наименование достижения',
            width: 700,
            margin:10,
            store: 'individualAchievments.store.achievmentsdatewin',
            valueField: 'id',
            displayField: 'name',
            bind: {
                value: '{achievments.name}'
            }

        },
        {
            xtype: 'combo',
            fieldLabel:'Статус достижения',
            width: 700,
            margin:10,
            store: 'individualAchievments.store.achievmentsdatewin',
            valueField: 'id',
            displayField: 'status',
            bind: {
                value: '{achievments.status}'
            }
        },
        {
            xtype: 'combo',
            fieldLabel:'Условие достижения',
            width: 700,
            margin:10,
            store: 'individualAchievments.store.achievmentsdatewin',
            valueField: 'id',
            displayField: 'condition',
            bind: {
                value: '{achievments.condition}'
            }
        },
        {
            xtype:'textfield',
            fieldLabel:'Описание',
            labelAlign: 'top',
            margin: 10,
            width:700

        }
    ],

    buttons: [
        {
            text: 'Добавить',
            handler: 'addInfo1'
        },
        {
            text: 'Cancel',
            handler: 'closeWindow'
        }
    ]

});