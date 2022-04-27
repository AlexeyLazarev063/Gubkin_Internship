Ext.define('individualAchievments.view.main.achievmentsStatus.achievmentsStatusWindow.AchievmentsStatusWin', {
    extend: 'Ext.window.Window',
    xtype: 'ListStatusWin',
    itemId: 'AchievmentsStatusWin',

    require: [
        'individualAchievments.store.achievmentsdatewin',
        'individualAchievments.view.main.achievmentsStatus.achievmentsStatusModel',
        'individualAchievments.view.main.achievmentsStatus.AchievmentsStatusController',
        'individualAchievments.view.main.achievmentsStatus.AchievmentsStatusWindowController'
    ],

    viewModel: 'datewinstatus',
    controller: 'achievmentsStatusWindow',

    title: 'Status',
    modal: true,
    items: [
        {
            xtype: 'textfield',
            width: 600,
            height: 50,
            margin: 10,
            name: 'achievmentsStatusField',
            valueField: 'id',
            displayField: 'status',
            fieldLabel: 'Статус достижения',
            labelAlign: 'top',
            emptyText: 'Введите текст',
            bind: {
                value: '{achievments.AchievmentsStatus}'
            }
        }
    ],
    buttons: [
        {
            text: 'Удалить',
            handler: 'deleteInfoAchievmentsStatus',
            bind:{
                hidden: '{achievments.delete}',
            }
        },
        {
            text: 'Обновить',
            handler: 'updateInfoAchievmentsStatus',
            bind:{
                hidden: '{achievments.update}',
            }
        },
        {
            text: 'Добавить',
            handler: 'addInfoAchievmentsStatus',
            bind:{
                hidden: '{achievments.create}',
            }
        },
        {
            text: 'Cancel',
            handler: 'closeWindowAchievmentsStatus'
        }
    ]

});