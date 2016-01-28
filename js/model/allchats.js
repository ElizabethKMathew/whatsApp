var AllChats = Backbone.Model.extend({
	defaults: {

		'id':'',
		'display_picture':'',
		'user_name': '',
		'recent_message': '',
		'msg_status_flag':''
		
	},
	url: '/app/save-chat'
});

var ChatList= Backbone.Collection.extend({
	model: AllChats
	
});