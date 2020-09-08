var express = require('express');
var app = express();
app.set('view-engine','ejs');
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.render('about.ejs');
});


app.post('/home',function(req,res){
    name = req.body.name;
    var number = req.body.number;
    module.exports = number;
    var ticket = require('./ticket.js');
    var board = require('./board.js');
    var arr = new Array();
    res.render('home.ejs',{ticket:ticket,ticket_copy:JSON.stringify(ticket) , number:parseInt(number),name:name,board:board,arr: JSON.stringify(arr)})
});

const PORT = process.env.PORT || 3000 ;
app.set("port",PORT);

