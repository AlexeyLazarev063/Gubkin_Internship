Ext.define('individualAchievments.view.main.achievments.achievmentsWindow.AchievmentsWin', {
    extend: 'Ext.window.Window',
    xtype: 'ListWin',
    itemId: 'AchievmentsWin',

    require: [
        'individualAchievments.view.main.achievments.AchievmentsModel',
        'individualAchievments.view.main.achievments.AchievmentsController',
        'individualAchievments.view.main.achievments.AchievmentsWindowController'
    ],

    viewmodel: 'datewin',
    controller: 'achievmentsWindow',

    title: 'Achievments',
    modal: true,
    items: [
        {
            xtype: 'combo',
            fieldLabel:'Наименование достижения',
            width: 700,
            margin:10,
            name: 'achievmentsNField',
            store: 'individualAchievments.store.AchievmentsDateName',
            valueField: 'AchievmentsName',
            displayField: 'AchievmentsName',
            bind: {
                value: '{achievments.AchievmentsNameMain}'
            }
        },
        {
            xtype: 'combo',
            fieldLabel:'Условие достижения',
            width: 700,
            margin:10,
            name: 'achievmentsCField',
            store: 'individualAchievments.store.AchievmentsDateCondition',
            valueField: 'AchievmentsCondition',
            displayField: 'AchievmentsCondition',
            bind: {
                value: '{achievments.AchievmentsConditionMain}'
            }
        },
        {
            xtype: 'combo',
            fieldLabel:'Статус достижения',
            width: 700,
            margin:10,
            name: 'achievmentsSField',
            store: 'individualAchievments.store.AchievmentsDateStatus',
            valueField: 'AchievmentsStatus',
            displayField: 'AchievmentsStatus',
            bind: {
                value: '{achievments.AchievmentsStatusMain}'
            }
        },
        {
            xtype:'textfield',
            fieldLabel:'Описание',
            labelAlign: 'top',
            margin: 10,
            width:700,
            name: 'achievmentsDField',
            bind: {
                value: '{achievments.AchievmentsDescriptionMain}'
            }
        }
    ],

    buttons: [
        {
            text: 'Удалить',
            handler: 'deleteInfoAchievments',
            bind:{
                hidden: '{achievments.delete}',
            }
        },
        {
            text: 'Обновить',
            handler: 'updateInfoAchievments',
            bind:{
                hidden: '{achievments.update}',
            }
        },
        {
            text: 'Добавить',
            handler: 'addInfoAchievments',
            bind:{
                hidden: '{achievments.create}',
            }
        },
        {
            text: 'Cancel',
            handler: 'closeWindowAchievments'
        }
    ]

});