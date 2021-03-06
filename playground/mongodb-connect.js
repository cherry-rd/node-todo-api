// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

// ES6 Destructuring -
// var user = {name: 'rohan', age: 25};
// var {name} = user; // name would be a variable destrured from object 
// console.log(name); // rohan


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });



	db.collection('Users').insertOne({
		name: 'Rohan',
		age: '21',
		location: 'Kolkata'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert user', err);
		}

		console.log(result.ops);
	});

	client.close();
});
