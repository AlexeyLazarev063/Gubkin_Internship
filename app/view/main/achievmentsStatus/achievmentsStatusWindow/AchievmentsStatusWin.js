Ext.define('individualAchievments.view.main.achievmentsStatus.achievmentsStatusWindow.AchievmentsStatusWin', {
    extend: 'Ext.window.Window',
    xtype: 'ListStatusWin',

    require: [
        'individualAchievments.store.achievmentsdatewin',
        'individualAchievments.view.main.achievmentsStatus.achievmentsStatusModel',
        'individualAchievments.view.main.achievmentsStatus.AchievmentsStatusController'
    ],

    viewModel: 'datewinstatus',
    controller: 'achievmentsStatus',

    title: 'Status',
    modal: true,
    items: [
        {
            xtype: 'textfield',
            width: 600,
            height: 50,
            margin: 10,
            store: 'individualAchievments.view.main.achievments.achievmentsdatewin',
            valueField: 'id',
            displayField: 'status',
            fieldLabel: 'Статус достижения',
            labelAlign: 'top',
            emptytext: 'Введите текст',
            bind: {
                value: '{achievments.status}'
            }
        }
    ],
    buttons: [
        {
            text: 'Добавить',
            handler: 'addInfo3'
        },
        {
            text: 'Cancel',
            handler: 'closeWindow3'
        }
    ]

});