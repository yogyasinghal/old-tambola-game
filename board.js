var arr = new Array();
var count = 1
for(var i = 0;i<9;i++){
    for (var j = 0 ;j<10;j++){
        arr.push(count);
        count = count + 1;
    }
}
module.exports = arr;