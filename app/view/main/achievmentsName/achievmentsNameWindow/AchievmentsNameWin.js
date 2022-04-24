Ext.define('individualAchievments.view.main.achievmentsName.achievmentsNameWindow.AchievmentsNameWin', {
    extend: 'Ext.window.Window',
    xtype: 'ListNameWin',
    itemId: 'AchievmentsNameWin',

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
            name: 'achievmentsNameField',
            valueField: 'id',
            displayField: 'condition',
            fieldLabel: 'Наименование достижения',
            labelAlign: 'top',
            emptyText: 'Введите текст',
            bind: {
                value: '{achievments.AchievmentsName}'
            }
        }
    ],
    buttons: [
        {
            text: 'Удалить',
            handler:'deleteInfoAchievmentsName',
            bind:{
                hidden: '{achievments.delete}',
            }
        },
        {
            text: 'Обновить',
            handler:'uploadInfoAchievmentsName',
            bind:{
                hidden: '{achievments.update}',
            }
        },
        {
            text: 'Добавить',
            handler: 'addInfoAchievmentsName',
            bind:{
                hidden: '{achievments.create}',
            }
        },
        {
            text: 'Cancel',
            handler: 'closeWindowAchievmentsName'
        }
    ]

});
