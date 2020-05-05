var PrimeTest = function(num){
    // checking for the boundry value
   if(num<=1){
       console.log("Number is not Prime");
   }
   // check for prime or not 
   else if (num%2===0){
       console.log("Number is Prime ");
   }
   else{
       console.log("Number is Not Prime");
   }

}

PrimeTest(6);
PrimeTest(7);
