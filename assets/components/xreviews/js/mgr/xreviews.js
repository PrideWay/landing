var xReviews = function (config) {
	config = config || {};
	xReviews.superclass.constructor.call(this, config);
};
Ext.extend(xReviews, Ext.Component, {
	page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('xreviews', xReviews);

xReviews = new xReviews();