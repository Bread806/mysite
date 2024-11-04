var MongoClient = require('mongodb').MongoClient;


const path = require('path');
const express = require('express');
const app = express();
const modules = require('./public/lib.js');

// sql connect
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
client.connect(); // try to connect db
const database = client.db('db1');// chose a db
const collection = database.collection('student');// get collection
    
    

async function mongo_insert(client){
    
}

for (m in modules)
    eval(`${m}=modules.${m}`); // import modules
    console.log("EXPORT:" + m);
function requestTime(req) {
    const queryDate = new Date();
    const formattedDate = queryDate.toISOString().split('T')[0];
    return `Someone visited: ${req.url} | at: ${queryDate}`;
};

app.use((req, res, next) => {
    console.log(requestTime(req)); // log time
    next(); 
});
// app.use('/', express.static(__dirname + "/public"));
// app.use('/', express.static(__dirname + "/img"));
app.use(express.static(path.join(__dirname, 'dist')));


app.get('/', (req, res) => {
    let p = path.join(__dirname, 'public', 'index.html');
    print_bug(p);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/cal', (req, res) => {
    let {a, b} = req.query;
    let c = Number(a) + Number(b);
    res.send("cal result: " + c);
});

app.post('/create', (req, res) =>{
    print_log("I am here");
    res.send("OK");
    mongo_create("AAA", 15, "BBB");
});

app.post('/testpost', (req,res) =>{
    res.send('login successful.\nWhat a colorful log!');
});


const port = 5173;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});