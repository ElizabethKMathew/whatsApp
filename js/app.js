var contacts = new AllContacts([{
	id: 1,
	display_picture:'img/profile.jpeg',
	user_name:'Anu',
	status:'Be positive'
}, {
	id: 2,
	display_picture:'img/strong.jpg',
	user_name:'Anju',
	status:'Be happy always'
}, {
	id: 3,
	display_picture:'img/index.jpeg',
	user_name:'Appu',
	status:'No status'
}, {
	id: 4,
	display_picture:'img/strong.jpg',
	user_name:'Maria',
	status:'....'
}]);

var chatList = new ChatList([{
	id: 1,
	display_picture:'img/profile.jpeg',
	user_name:'Anu',
	recent_message: 'Gd mrng',
	msg_status_flag:'NA'
}, {
	id: 2,
	display_picture:'img/strong.jpg',
	user_name:'Anju',
	recent_message: 'How are you?',
	msg_status_flag:'read'


}]);


//var contact =new Contact();
var root = new Root({
	"contacts":contacts,
	"chatList":chatList
});
root.render();
