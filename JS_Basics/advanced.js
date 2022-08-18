 // ***************NESTED FUNCTION SCOPE *******************************

// const a = 10
// function outer(){
//     const b = 20
//     function inner() {
//         const c = 30
//         console.log(a, b, c)
//     }
//     inner()
// }
// outer()
// Lets uderstand whats going on:
// nested functions have acces to variables declared in their own scope as well as in the outer scopes
// looking at the log statement in the innermost fn. console.log(a, b, c), starting with c
// js checks to see if c is withing that functions scope, it is! so it logs 30 to console
// it then checks b to see it it is available withi  that functions scope, its not!
// it then moves one level up to the outer() functions scope checks for b, it its available!
// it then checks a to see if it is available withi the inner() function scope, it's not available! 
// it moves one level up to the outer() function scope and checks for a, it's not available!
// it then moves one level up to the global scope and checks for a, it's available!
// so 10 20 30 gets logged to the console




                // **************************CLOSURES************************

    // A closure is the combination of a function and the environment within which that function was declared,
    // the environment consists of any local variables that were in scope at the time that the closure was created.
                                                //OR
    // A closure is a combination of a function bundled together with references to its surrounding state!

    // in JS all functions form closures.
    // in other languages without closures:
            // local variables within a function only exist for the duration of that functions execution.

            // const parentFn = () => {
            //     let counter = 0;
            //     function childFn() {
            //         counter++;
            //         console.log(counter);
            //     }
            //     return childFn
            // }

            // const myFn = parentFn()

            // myFn()
            // myFn()
            // myFn()
            // myFn()

            // in JS when we return a function from another function, we are effectively,
            // returning a combinationof the **function definition** along with the function's scope.
            // This would let the function have an associated persistent memory which can hold on to live data between executions.
            // That combination of the function and its scope chain is what is called a closure in JS.
            //we get closures when we return a function from another function, 
            //with closures the inner function still has access to variables in the outer scope even after the outer function has been executed
            // nested functions have acces variables declared in  their own scope and scope of parent!





// // FUNCTION CURRYING: Where we transform a funtion with multiple argumens, into a sequence of nesting functions, which take 1 argument at a time.   !!Does not call a function, Only transforms it!

// setup a currying function that takes a 2-arity (a,b) function and curries it good! 
// function curry(fn) {
//     return (a)=> {
//         return (b)=>{
//             return fn(a, b);
//         };
//     };
// }

// // usage

// //fn that the will be curried. the curry(fn) will take as a parameter
// function sum(a, b) {
//     return a + b;
// }

// //

// let curriedfn = curry(sum);

// console.log( curried                           

                                             //****************************this******************************// 
                                             

// refers to the object it belongs to
//makes functions reusable by letting you decide the object value
//lets you determine the execution context &
//its value is determined entirely by *how a function is called* (inplicit Binding, explici Binding, new binding, Default Binding)

// examples...

//implicit biding       
// const person = {
//         name: 'John',
//         sayName: function ()  {
//                 console.log (`My name is ${this.name}`);
//         }          
// }
//  person.sayName(); // Result: John.  implicit binding rule says when a function is invoked with dot(.)notation 
//                     //that this keywors refers to the object to the left side of the dot



// //explicitly specifying the context where the function is called - using the build in 
// //.call method and passing the object that this keywors refers to as an argument to the .call method.
// function sayMyName () {
//         console.log(`My name is ${this.name}`);
// }
//         sayMyName.call(person);


// // new bindind- when a function is invoked using the new keyword, within the function, this keyword will always reference a new empty object.
// function Person(name){
//         //this = {}
//         this.name = name;
// }

// const p1 = new Person("Yan");
// const p2 = new Person('jim');
// console.log(p1.name, p2.name); // Result: yan jim


// //default binding - this keyword will refer to the global scope is none of the other 3 conditions are satisfied
// function sayMyName () {
//         console.log(`My name is ${this.name}`);
// }
   
// sayMyName(); // Result:undefined - unless a global variable called name exists: name = 'bettty' for browsers  or  globalThis.name = betty for nodejs


// Order of Precedence : New Binding takes priority, followed by, Explicit, followed by Implicit, followed by Default!




















// VS Corporate
// Jenkins
// Kubernetes
// EKS


// TEAM



// browser firewall setup 
// source code