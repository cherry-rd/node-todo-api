const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c37391f5d49c40f8051680d';

// incase catch not used below, we can then use another method
// i.e. to check if the id is valid or not beforehand
if (!ObjectID.isValid(id)) {
	console.log('ID not valid');
}

// will fetch all the documents available
Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});

// will fetch the first document matched with the id
Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo', todo);
});

// will fetch a document only with id field
Todo.findById(id).then((todo) => {
	if (!todo) { 
		return console.log('Id not found'); // incase valid id but no match document with that id
	}
	console.log('Todo By Id', todo);
}).catch((e) => console.log(e)); // incase invalid id

// query for user
var userId = '5c361d12ed77b306e0dd482e';
User.findById(userId).then((user) => {
	if (!user) {
		return console.log('Unable to find user');
	}

	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
});