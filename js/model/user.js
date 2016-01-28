var User= Backbone.Model.extend({
	defaults: {
		
		'id': '',
		'name':''
		
	},
	url: '/app/save-user'
});

var AllUser= Backbone.Collection.extend({
	model: User
	
});