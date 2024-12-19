

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