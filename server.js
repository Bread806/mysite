const mysql = require('mysql2');
const path = require('path');
const express = require('express');
const app = express();
const modules = require('./public/lib.js');

// sql function
// const SQL = mysql.createPool({
//     connectionLimit : 10,
//     host : 'localhost',
//     user : 'root',
//     password : 'root',
//     database : ''
// });

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

app.post('/testpost', (req,res) =>{
    res.send('login successful.\nWhat a colorful log!');
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});