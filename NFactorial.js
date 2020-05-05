var NFactorial = function(num){

    var fact = 1;
    for(var i=1;i<=num;i++){
        fact = fact * i;
        console.log(fact);
    }   

}

NFactorial(10);