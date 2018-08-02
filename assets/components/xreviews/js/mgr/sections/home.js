xReviews.page.Home = function (config) {
	config = config || {};
	Ext.applyIf(config, {
		components: [{
			xtype: 'xreviews-panel-home', renderTo: 'xreviews-panel-home-div'
		}]
	});
	xReviews.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(xReviews.page.Home, MODx.Component);
Ext.reg('xreviews-page-home', xReviews.page.Home);