var ListItem = Backbone.View.extend({
    tagName: 'li',
    className: 'list-group-item',
    initialize: function(options) {
        this.contacts=options.contacts;
        } ,
    render: function() {
var contactId= this.model.get('id');
var foundContact = this.contacts.findWhere({id: contactId});
console.log(contactId);
		var userName  = foundContact.get('user_name');
		var userStatus = foundContact.get('status');
		var DP={
			photo:foundContact.get('display_picture')
		} 
		var tmp = '<img src="<%= photo %>" alt="dp" height="30px" width="30px">'
		this.temp = _.template(tmp);
		this.compiled = this.temp(DP);
		this.$el.append(this.compiled);
        //this.$el.append('<img src="<%= userPicture %>" alt="dp" >' );
        this.$el.append('<span class="username">' + userName + '</span><br>');
        this.$el.append( userStatus );
        return this;
    }
});


var List = Backbone.View.extend({
    tagName: 'ul',
    className:'table',
    initialize: function(options) {
    	this.contacts=options.contacts;
    
    },
    allRender: function() {
        var li, html = [];
        this.contacts.each(function(mod) {
            
            li = new ListItem({
                model: mod,
                contacts : this.contacts
            });

            html.push(li.render().el);
        });

        this.$el.html(html);
    },
    render: function(mod, col, action) {
        if (!action) {
            this.allRender();
        } else if (!!action && action.add) {
            li = new ListItem({
                model: mod,
                contacts: this.contacts
            });
            this.$el.append(li.render().el);
        };
        return this;
    }
});