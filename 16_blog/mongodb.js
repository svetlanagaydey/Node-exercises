//const mongodb = require('mongodb');
//const MongoClient = mongodb.MongoClient;
const { MongoClient, ObjectId} = require('mongodb');
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'blog-manager';

const id = new ObjectId();
console.log(id);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log("Unable to connect ot database!")
    }
    //console.log("Connected correctly!")
    const db = client.db(databaseName);
    

    db.collection('users').insertOne({
        _id: id,
        name: 'Monika',
        age: 22
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }
        console.log(result.ops)
    });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Roy',
    //         email: 'test1@test.com'
    //     },
    //     {
    //         name: 'Alex',
    //         email: 'test2@test.com'
    //     },
    //     {
    //         name: 'Ann',
    //         email: 'test3@test.com'
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // });

    db.collection('posts').insertMany([
        {
            title: 'News in HTML',
            text: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
            author: {
                "$ref": "users",
                "$id": ObjectId("61e6b3b97b490c89dd26ca02")
            },
            comments: []
        },
        {
            title: 'Coocking fish',
            text: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
            author: {
                "$ref": "users",
                "$id": ObjectId("61e6b3b97b490c89dd26ca03")
            },
            comments: []
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }
        console.log(result.ops)
    } )
})