var Status = Backbone.Model.extend({
	defaults: {
		
		'user_id': '',
		'text':''
		
	},
	url: '/app/save-status'
});

var AllStatus= Backbone.Collection.extend({
	model: Status
	
});