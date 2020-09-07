// var tickets_required = 5;
var tickets_required = require('./app.js');
var final = new Array()
console.log("in ticket");
for (var p = 0;p<tickets_required;p++){

    var ticket = new Array();
    for (var i = 0; i < 3; i++) { 
        ticket[i] = []; 
    }

    var double_row = [];
    var min = 1;
    var max = 2;
    for(var i = 0;i<4;i++){
        var random = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
        double_row.push(random);
        min = max+1;
        max = max +2;
    }
    min = 1;
    max = 8;
    var random = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
    double_row.push(random);
    double_row.sort();
   
    var min = 1 ; 
    var max = 9;  
    var arr = new Array();
    
    for(var i = 0 ;i<9;i++){

        if(i==8){
            max = 90;
        }
        var random = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
        arr.push(random);
        var flag = double_row.includes(i);
        if (flag==true){
            var temp_flag = true;
            while(temp_flag == true){
                var random = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
                var temp_flag = arr.includes(random);
                if (temp_flag==false){
                    arr.push(random);
                }
            }
        }
        min = max + 1;
        max = max + 10;
    }


    var temp = 15;
    var low = 0;
    var high = 2;
    var flag = 0;
    arr.sort((a, b) => a - b);
   
    for (var i = 0;i<15;i++){
        
        if (i==temp){
            continue;
        }
        if (flag==1){
            flag = 0
            continue;
        }
        // console.log(i);
        var row = Math.floor(Math.random() * (+high + 1 - +low)) + +low; 
        var random = arr[i];
        // console.log("i , arr[i] = " + i + "," + random + ",      ," + arr[i] + "," + arr[i+1] + ","  + arr[i+2]);
        if (Math.floor(arr[i]/10) == Math.floor(arr[i+1]/10) && Math.floor(arr[i+1]/10) == Math.floor(arr[i+2]/10)){
            var max = Math.max(arr[i], arr[i+1], arr[i+2]);
            var min = Math.min(arr[i], arr[i+1], arr[i+2]);
            var rem = arr[i] + arr[i+1] + arr[i+1] - max - min ;
            ticket[0].push(min);
            ticket[1].push(rem);
            ticket[2].push(max);
            // ticket[row3].push(0);
            temp = i+1;
            flag = 1;
        }

        else if (Math.floor(arr[i]/10) == Math.floor(arr[i+1]/10)){

            var row1 = Math.floor(Math.random() * (+high + 1 - +low)) + +low;
            var row2 = Math.floor(Math.random() * (+high + 1 - +low)) + +low;
            while(row1==row2){
                var row1 = Math.floor(Math.random() * (+high + 1 - +low)) + +low;
                var row2 = Math.floor(Math.random() * (+high + 1 - +low)) + +low;
            }
            if (row1>row2){
                var c = row1;
                row1 = row2;
                row2 = c;
            }
            row3 = 3 - row1 - row2;
            ticket[row1].push(arr[i]);
            ticket[row2].push(arr[i+1]);
            ticket[row3].push(0);
            temp = i+1;
        }
        else{
            var row = Math.floor(Math.random() * (+high + 1 - +low)) + +low;
            for (var j = 0;j<3;j++){
                if (j==row){
                    ticket[row].push(random);
                }
                else{
                    ticket[j].push(0);
                }
            }
        }
    }
    final.push(ticket);
}
// console.log(ticket);
module.exports = final;