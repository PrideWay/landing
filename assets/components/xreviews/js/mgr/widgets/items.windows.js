xReviews.window.CreateItem = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'xreviews-item-window-create';
	}
	Ext.applyIf(config, {
		title: _('xreviews_item_create'),
		width: 675,
		autoHeight: true,
		url: xReviews.config.connector_url,
		action: 'mgr/item/create',
                fields:[{
                               layout:'column'
                               ,border: false
                               ,anchor: '100%'
                               ,items: [{
                                       columnWidth: .99
                                       ,layout: 'form'
                                       ,defaults: { msgTarget: 'under' }
                                       ,border:false
                                       ,items: [
                                           {xtype: 'datefield',fieldLabel: "Дата",name: 'date',id: config.id + '-date',anchor: '99%',allowBlank: false,},
                                           {xtype: 'textfield',fieldLabel: "Имя",name: 'name',id: config.id + '-name',anchor: '99%',allowBlank: false,},
                                           {xtype: 'textfield',fieldLabel: "E-mail",name: 'email',id: config.id + '-email',anchor: '99%',allowBlank: true,},
                                       ]
                               }]
                       },
                       {xtype: 'textarea',fieldLabel: "Отзыв",name: 'xbody',id: config.id + '-xbody',allowBlank: false,},
                       {xtype: 'xcheckbox',boxLabel: "Опубликовать",name: 'active',id: config.id + '-active',checked: true,}
                   ],
                   
                   
                   
                   
                   
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	xReviews.window.CreateItem.superclass.constructor.call(this, config);
        
        this.on('activate',function() {
            if (MODx.loadRTE) { MODx.loadRTE(config.id + '-xbody'); }
        });
};
Ext.extend(xReviews.window.CreateItem, MODx.Window, {});
Ext.reg('xreviews-item-window-create', xReviews.window.CreateItem);


xReviews.window.UpdateItem = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'xreviews-item-window-update';
	}
	Ext.applyIf(config, {
		title: _('xreviews_item_update'),
		width: 675,
		autoHeight: true,
		url: xReviews.config.connector_url,
		action: 'mgr/item/update',
                fields:[{xtype: 'hidden',name: 'id',id: config.id + '-id',},{
                               layout:'column'
                               ,border: false
                               ,anchor: '100%'
                               ,items: [{
                                       columnWidth: .99
                                       ,layout: 'form'
                                       ,defaults: { msgTarget: 'under' }
                                       ,border:false
                                       ,items: [

                                           {xtype: 'datefield',fieldLabel: "Дата",name: 'date',id: config.id + '-date',anchor: '99%',allowBlank: false,},
                                            {xtype: 'textfield',fieldLabel: "Имя",name: 'name',id: config.id + '-name',anchor: '99%',allowBlank: false,},
                                           {xtype: 'textfield',fieldLabel: "E-mail",name: 'email',id: config.id + '-email',anchor: '99%',allowBlank: true,},
                                           
                                       ]
                               }]
                       },
                       {xtype: 'textarea',fieldLabel: "Отзыв",name: 'xbody',id: config.id + '-xbody',allowBlank: false,},
                       {xtype: 'xcheckbox',boxLabel: "Опубликовать",name: 'active',id: config.id + '-active',checked: true,}
                   ],                
                keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	xReviews.window.UpdateItem.superclass.constructor.call(this, config);
        this.on('activate',function() {
            if (MODx.loadRTE) { MODx.loadRTE(config.id + '-xbody'); }
        });
};
Ext.extend(xReviews.window.UpdateItem, MODx.Window, {  });
Ext.reg('xreviews-item-window-update', xReviews.window.UpdateItem);



