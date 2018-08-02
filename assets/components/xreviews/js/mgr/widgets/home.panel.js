xReviews.panel.Home = function (config) {
	config = config || {};
	Ext.apply(config, {
		baseCls: 'modx-formpanel',
		layout: 'anchor',
		/*
		 stateful: true,
		 stateId: 'xreviews-panel-home',
		 stateEvents: ['tabchange'],
		 getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
		 */
		hideMode: 'offsets',
		items: [{
			html: '<h2>' + _('xreviews') + '</h2>',
			cls: '',
			style: {margin: '15px 0'}
		}, {
			xtype: 'modx-tabs',
			defaults: {border: false, autoHeight: true},
			border: true,
			hideMode: 'offsets',
			items: [{
				title: "Отзывы",
				layout: 'anchor',
				items: [{
					html: _('xreviews_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'xreviews-grid-items',
					cls: 'main-wrapper',
				}]
			}]
		}]
	});
	xReviews.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(xReviews.panel.Home, MODx.Panel);
Ext.reg('xreviews-panel-home', xReviews.panel.Home);
