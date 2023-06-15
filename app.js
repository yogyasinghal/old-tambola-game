var express = require('express');
const PORT = process.env.PORT || '8080' ;
var app = express();
app.set("port",PORT);
app.set('view-engine','ejs');
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.render('about.ejs');
});

app.post('/home',function(req,res){
    Name = req.body.name;
    var number = req.body.number;
    module.exports = number;
    var ticket = require('./ticket.js');
    var board = require('./board.js');
    var arr = new Array();
    res.render('home.ejs',{ticket:ticket,ticket_copy:JSON.stringify(ticket) , number:parseInt(number),name:Name,board:board,arr: JSON.stringify(arr)})
});

app.listen(PORT);
