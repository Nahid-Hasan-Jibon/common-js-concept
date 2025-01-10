//A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

// function greeting(person){
//     console.log(person)
// }
// const name= 'halua'
// const numbers= [45 , 54, 78, 98]

// const laptop ={price:30000, brand:'hp', memory:'8gb'}
// greeting( )
//  jekno kicu amara argument hisebe pass korte pari

// chaile para meter hisebe amra akta function o pathate pari .


function greeting(greetingHandler){
    console.log(greetingHandler())
}

function greetingHandler(){
    console.log('good morning')

} 

greeting( greetingHandler )


/**
 * When to Use a Callback?
The examples above are not very exciting.

They are simplified to teach you the callback syntax.

Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

Asynchronous functions are covered in the next chapter.
 */