/**
 * 8 ways to get undefined:
 * 1. variable that is not initialized will give undefined
 */
// 1. when we don't assign value in a variable we get undefined .
// let first;
// console.log(first) --> undefined


// 2. function with no return
function second(a,b){
    const total = a+b
}
const result=second(2,3)
// console.log(result)


// 3. parameter that is not passed will be undefined
function third(a,b,c,d){
    const total = a+b+c+d
    // console.log(a,b,c,d)

}
third(3,4)

//4. if return has nothing on the right side will return undefined
function noNegative(a,b){
    if(a<0||b<0){
        return
    }
    return a+b
}
const total=noNegative(2,-3)
// console.log(total)

// 5.je 
const fifth ={
    id:123,
    name:'karu',
    age:34
}
// console.log( fifth.salary)


// 6. accessing array elements outside of the index range
//7. deleting an element inside an array
const sixth =[2,3,4,5,7]
//you should not use this . u should use splice
delete sixth[1]
console.log(sixth[1], sixth[6]) 

//8. set a value directly to undefined

const eight = undefined ;
console.log(eight)

//9. kono kicu nai bujhate use kora hoy null

const ninth  = null
console.log(ninth)