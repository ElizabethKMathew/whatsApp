var Form = Backbone.View.extend({
	
  
    tagName: 'form',
    initialize: function(contact) {
    	
        var tmp = "<label><%= name %>:</label>"
        this.temp = _.template(tmp);
        var CON = {
            name: this.model.get('user_name')
        };
        this.complied = this.temp(CON);
        console.log(this.complied);
    },
    events: {
        'submit': 'onSubmit'
    },
    render: function() {
        this.$el.append(this.complied);
        //this.$el.append('<button type="submit" class="contacts">Contacts</button>');
      
        return this;
    },
    onSubmit: function(e) {
        e.preventDefault();
        this.collection.add({
            
        })
      
   }

});