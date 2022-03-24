Ext.define('individualAchievments.view.main.achievmentsName.achievmentsNameWindow.AchievmentsNameWin', {
    extend: 'Ext.window.Window',
    xtype: 'ListNameWin',

    require: [
        'individualAchievments.store.achievmentsdatewin',
        "individualAchievments.view.main.achievmentsName.AchievmentsNameModel",
        'individualAchievments.view.main.achievmentsName.AchievmentsNameController'
    ],

    viewModel: 'datewinname',
    controller: 'achievmentsName',

    title: 'Achievment\'s name',
    modal: true,
    items: [
        {
            xtype: 'textfield',
            width: 600,
            height: 50,
            margin: 10,
            store: 'individualAchievments.store.achievmentsdatewin',
            valueField: 'id',
            displayField: 'condition',
            fieldLabel: 'Наименование достижения',
            labelAlign: 'top',
            emptytext: 'Введите текст',
            bind: {
                value: '{achievments.name}'
            }
        }
    ],
    buttons: [
        {
            text: 'Добавить',
            handler: 'addInfo2'
        },
        {
            text: 'Cancel',
            handler: 'closeWindow2'
        }
    ]

});
