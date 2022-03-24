Ext.define('individualAchievments.view.main.achievmentsCondition.achievmentsConditionWindow.AchievmentsConditionWin', {
    extend: 'Ext.window.Window',
    xtype: 'ListCondWin',

    require: [
        'individualAchievments.store.achievmentsdatewin',
        'individualAchievments.view.main.achievmentsCondition.AchievmentsConditionModel',
        'individualAchievments.view.main.achievmentsCondition.AchievmentsConditionController'
    ],

    viewModel: 'datewincond',
    controller: 'achievmentsCond',

    title: 'Condition',
    modal: true,
    items: [
        {
            xtype: 'textfield',
            margin: 10,
            width: 600,
            height: 50,
            store: 'individualAchievments.store.achievmentsdatewin',
            valueField: 'id',
            displayField: 'name',
            fieldLabel:'Условие',
            labelAlign: 'top',
            emptytext: 'Введите текст',
            bind: {
                value: '{achievments.condition}'
            }
        }
    ],
    buttons: [
        {
            text: 'Добавить',
            handler: 'addInfoAchievmentsCondition'
        },
        {
            text: 'Cancel',
            handler: 'closeWindowAchievmentsCondition'
        }
    ]

});