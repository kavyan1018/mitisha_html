/*
    types of loops in js
        1. For loop 

                for(initialization; condition; increment / decrement){
                    // code
                }

        2. while loop

            initialization;
            while(condition)
            {
                // code 
                // inc / dec
            }

        3. do-while loop
            initialization;
            do{

                // code 
                // inc / dec
            
            }while(condition);

*/

// for loop

for (let i = 0; i < 5; i++) {
    console.log("Hello World");
}


// while loop
let j = 0;
while (j < 5) {
    
    console.log("Hello World !!", j);
    j++;
}


// do while loop

let k = 1;
do{

    console.log(k, "Hello World");
    k++;
}while(k  < 5);