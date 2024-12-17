/*
 *Truthy:
 1. true
 2. any number positive or negative other than 0
 3. string , even with space , '0' , 'false' but not empty string
 4. {} Object even it is empty
 5. [] Array even it is empty

 Falsy:
 1. false
 2. 0 
 3. Empty string ''
 4. undefined
 5. null
 6. NaN
 */


const x ={} ;

if (x){
    console.log('value of x is truthy')
}
else{
    console.log('value of x is falsy')
}

//optional
//false hoile ami kicu akta krbo
//check falsy

const y =''
if(!y){
    console.log('value is falsy')

}
else{
    console.log('truthy ')
}

// check truthy
const z =""
if(!!z){
    console.log('value is truthy')
}