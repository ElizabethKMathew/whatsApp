var Contact= Backbone.Model.extend({
	defaults: {

		'id':'',
		'display_picture':'',
		'user_name': '',
		'status': ''
		
	},
	url: '/app/save-contact'
});

var AllContacts= Backbone.Collection.extend({
	model: Contact
	
});