// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	
	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'})
	// 	.then((result) => {
	// 		console.log(result);
	// 	});

	
	// deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'})
	// 	.then((result) => {
	// 		console.log(result);
	// 	});


	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false})
	// 	.then((result) => {
	// 		console.log(result); // result for this method will return the deleted body rather than the cursor 
	// 	});


	// deleteMany
	// db.collection('Users').deleteMany({name: 'Rohan'})
	// 	.then((result) => {
	// 		console.log(result);
	// 	});

	
	// deleteOne
	db.collection('Users').deleteOne({_id: new ObjectID('5c35222a8e0d26531f8e8d89')})
		.then((result) => {
			console.log(result);
		});

	// client.close();
});
