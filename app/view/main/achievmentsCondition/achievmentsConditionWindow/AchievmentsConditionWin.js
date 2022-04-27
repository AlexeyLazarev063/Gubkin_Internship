Ext.define('individualAchievments.view.main.achievmentsCondition.achievmentsConditionWindow.AchievmentsConditionWin', {
    extend: 'Ext.window.Window',
    xtype: 'ListCondWin',
    itemId: 'AchievmentsConditionWin',

    require: [
        'individualAchievments.store.achievmentsdatewin',
        'individualAchievments.view.main.achievmentsCondition.AchievmentsConditionModel',
        'individualAchievments.view.main.achievmentsCondition.AchievmentsConditionController',
        'individualAchievments.view.main.achievmentsCondition.AchievmentsConditionWindowController'
    ],

    viewModel: 'datewincond',
    controller: 'achievmentsCondWindow',

    title: 'Condition',
    modal: true,
    items: [
        {
            xtype: 'textfield',
            margin: 10,
            width: 600,
            height: 50,
            name: 'AchievmentsConditionField',
            valueField: 'id',
            displayField: 'name',
            fieldLabel:'Условие',
            labelAlign: 'top',
            emptyText: 'Введите текст',
            bind: {
                value: '{achievments.AchievmentsCondition}'
            }
        }
    ],
    buttons: [
        {
            text: 'Удалить',
            handler: 'deleteInfoAchievmentsCondition',
            bind:{
                hidden: '{achievments.delete}',
            }
        },
        {
            text: 'Обновить',
            handler: 'updateInfoAchievmentsCondition',
            bind:{
                hidden: '{achievments.update}',
            }
        },
        {
            text: 'Добавить',
            handler: 'addInfoAchievmentsCondition',
            bind:{
                hidden: '{achievments.create}',
            }
        },
        {
            text: 'Cancel',
            handler: 'closeWindowAchievmentsCondition'
        }
    ]

});