// for(var i=0;i<5;i++){
//     console.log(i)
// }
// console.log('outside', i)

// thats why we use let

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log("outside", i); ---> error

print5()
// 

function print5(){
    console.log('inside',5)
}

//  but function expression

const print10= function(){
    console.log('inside print' , 10)
}
print10()