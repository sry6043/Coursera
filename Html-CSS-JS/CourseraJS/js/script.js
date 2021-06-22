var x = "Hello World!";
var message ="in global";
console.log(message);

function a(){
    var message="inside a";
    console.log(message);

    function c()
    {
        console.log(message);
    }
    
    b();
    c();
}

var b = function (){
    console.log(message);
}
a();