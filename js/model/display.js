var Display= Backbone.Model.extend({
	defaults: {
		
		'user_id': '',
		'picture':''
		
	},
	url: '/app/save-picture'
});

var AllDisplay= Backbone.Collection.extend({
	model: Display
	
});