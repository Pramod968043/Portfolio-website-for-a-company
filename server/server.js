var express = require('express');
var app = express();
var fs = require('fs');
var cors = require('cors')

app.use(cors())

const { MongoClient } = require("mongodb");
const password = 'test12345';

const url = `mongodb+srv://test-user:${password}@mycluster.ixglzcr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

app.get('/',function(req,res){
    res.end("rest api");
    console.log("get request at / successfull!");
})

app.get('/movies',async function(requ,res){
    await client.connect();
    const collection = client.db("Netflix").collection("movies");
    collection.find({}).toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching listings!");
       } else {
          res.json(result);
          console.log("get request at /movies successfull!")
        }
      });
})

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log(`app is running at ${host}:${port}`);
})