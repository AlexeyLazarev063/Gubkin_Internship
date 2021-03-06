Ext.define('individualAchievments.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'individualAchievments.view.main.MainController',
        'individualAchievments.view.main.MainModel',
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Achievments',
        iconCls: 'fa-home',
        scrollable: true,
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: "Achievment's name" ,
        iconCls: 'fa-user',
        scrollable: true,
        items: [{
            xtype: 'mainlistName'
        }]
    }, {
        title: 'Status',
        iconCls: 'fa-users',
        scrollable: true,
        items: [{
            xtype: 'mainlistStatus'
        }]
    }, {
        title: 'Conditions',
        iconCls: 'fa-cog',
        scrollable: true,
        items: [{
            xtype: 'mainlistCond'
        }]
    }]
});
