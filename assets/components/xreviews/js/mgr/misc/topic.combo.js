
xReviews.combo.Topic = function(config) {
	config = config || {};
	Ext.applyIf(config,{
		name: 'topic'
		,hiddenName: 'topic'
		,displayField: 'pagetitle'
		,valueField: 'id'
		,fields: ['id','pagetitle']
		,pageSize: 50
		,hideMode: 'offsets'
		,url: MODx.config.connector_url
		,baseParams: {action: 'resource/getlist'}
		,tpl: new Ext.XTemplate(''
			+'<tpl for="."><div class="x-combo-list-item xreviews-category-list-item">'
			+'<span><b>{pagetitle}</b> ({id})</span>'
			+'</div></tpl>',{
			compiled: true
		})
		,itemSelector: 'div'
	});
	xReviews.combo.Topic.superclass.constructor.call(this,config);
};
Ext.extend(xReviews.combo.Topic,MODx.combo.ComboBox);
Ext.reg('xreviews-combo-topic',xReviews.combo.Topic);

