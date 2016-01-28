var Root = Backbone.View.extend({
	el: '#root',

	initialize:function(options){
		this.contacts = options.contacts;
		this.chatList = options.chatList;
		
		},
	
		render: function() {
		var list = new List({ 
			"contacts":this.contacts,
			"chatList":chatList});
		console.log(this.contacts);
		//this.$el.append('<button type="submit" class="contacts">Contacts</button>');
		this.$el.append(list.render().el);
		return this;
}

});