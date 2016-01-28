var Chat = Backbone.Model.extend({
	defaults: {
		'user_id':'',
		'sent_msg':'',
		'received_msg':''
		
	},
	url: '/app/save-chathistory'
});

var AllChats= Backbone.Collection.extend({
	model: Chat 
	
});