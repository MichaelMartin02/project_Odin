window.onload=function(){
    
    let btn = document.getElementById("button");
    btn.addEventListener('click', ()=>{
        let textarea = document.getElementById("textarea").value;
        const val = parseInt(textarea);
        console.log(val);
        console.log(textarea);
        let ans=document.getElementById("result");
        for (let i=1; i<=val; i++){
            console.log('i='+i);
            let istring = i;
            if (i % 3 == 0 && i % 5 == 0){
                istring = "FizzBuzz"
            }
            else if (i % 3 == 0){
                istring = 'Fizz'
            }
            else if (i % 5 == 0){
                istring = 'Buzz'
            }
           
            

            ans.innerHTML += " "+ istring;
            
        }
    })

}
// When a user inputs a number
// Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current number