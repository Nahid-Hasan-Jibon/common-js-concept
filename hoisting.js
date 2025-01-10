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




/**
 * JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

Hoisting is not a term normatively defined in the ECMAScript specification. The spec does define a group of declarations as HoistableDeclaration, but this only includes function, function*, async function, and async function* declarations. Hoisting is often considered a feature of var declarations as well, although in a different way. In colloquial terms, any of the following behaviors may be regarded as hoisting:

Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
The side effects of a declaration are produced before evaluating the rest of the code that contains it.
The four function declarations above are hoisted with type 1 behavior; var declaration is hoisted with type 2 behavior; let, const, and class declarations (also collectively called lexical declarations) are hoisted with type 3 behavior; import declarations are hoisted with type 1 and type 4 behavior.

Some prefer to see let, const, and class as non-hoisting, because the temporal dead zone strictly forbids any use of the variable before its declaration. This dissent is fine, since hoisting is not a universally-agreed term. However, the temporal dead zone can cause other observable changes in its scope, which suggests there's some form of hoisting:
 */