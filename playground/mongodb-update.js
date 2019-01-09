// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');


	// db.collection('Todos').findOneAndUpdate({
	// 	_id: ObjectID('5c35e898d3ab98db87f224f6')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });


	db.collection('Users').findOneAndUpdate({
		_id: ObjectID('5c3522028e0d26531f8e8d7b')
	}, {
		$set: {
			name: 'Rohan',
		},
		$inc: {
			age: -1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	// client.close();
});
