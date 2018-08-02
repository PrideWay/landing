xReviews.combo.Sex = function(config) {
	config = config || {};
	Ext.applyIf(config,{
		name: 'sexlist'
		,hiddenName: 'sexlist'
		,displayField: 'name'
		,valueField: 'sexid'
		,fields: ['sexid','name']
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
	xReviews.combo.Sex.superclass.constructor.call(this,config);
};
Ext.extend(xReviews.combo.Sex,MODx.combo.ComboBox);
Ext.reg('xreviews-combo-sex',xReviews.combo.Sex);

