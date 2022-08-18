// // log a statement using console log function
// console.log("Hello from me")
// console.log("Hey manager how are you?")

// // variables  let & const (***ALWAYS USE CONST UNLESS THE VARIABLE WILL CHANGE LATER)
// let DateOfBirth = '11/10/19871'
// console.log(DateOfBirth)

// const Height = 6
// console.log(Height)

// DateOfBirth = 17
// console.log(DateOfBirth)



//**DATATYPES**

// primitive types : string, number, boolean, undefined, null, symbol, bigint
// non-primitive types : Objects

    //string - (A sequence of characters that represent a text value)
    // number -(represents integers and floating point numbers)
    // boolean -(represents logical entities, values can only be 1 of two things; true or false. Usualy used to run code conditionally)
    

    // undefined (represents value that has not yet been assigned, can set explicitly)
    // null (Represents empty or unknown value in JS. Used to denote a null value)
    // **to explicitly assign a valuethat is not known use Null instead of undefined**


    // **************************************************Object Datatype*********************************************************


    // non primitive type(is a collection of values) : object : a complex datatype,  contains properties defined as "key: value" pairs

    // const person = {
    //     firstName: 'John',
    //     lastName: 'Dough',
    //     age: 36,
    // }

    // console.log(person.firstName, person.lastName)


    // **********************************************ARRAY Datatype*************************************************************

    //  const colors = ['blue', 'green', 'yellow', 'red', 'orange',]

    //  console.log(colors[3])

// *******JS is a DYNAMICALLY TYPED language****** 
// 1. you do not have to specify the datatypeof a variable when you declare it!
// 2. Which also means: Dtattypes are automatically converted during execution.
        // let a = 10;
        //  a = "Fish Sticks";
        //  a = true;
        // console.log(a)


// ****************************************************************Operators******************************************************** 
// 1:       Assignment operator (=)
// Used to asign values to variables!
// e.g let a = 10;




// 2:       Arithmetic operator (+, -, *, /, %, ++, --,)
// Used to perform arithmetic calculations
// let a = 10;
// let b = 5;
// console.log(a + b) equals 15
// console.log(a * b) equals 50
// console.log(a % b) equals 0: gives you the remainder after dividing 10 by 5
// console.log( ++a) equals 11: increments the value of a by 1
// console.log( --a) equals 9: decrements the value of a by 1


// 3:       Comparison Operators(==, !=, <=(less than and equal to), >=(greater than and equal to), ===(strict equality, compares both value and datatype of the operands), !==(strict inequality, compares both value and datatype of the)
// These operators compare two values && returns a **Boolean** value; either **true or false**
// primarily used to in loops and branchingstatements.


// 4:           Logical operators
// Perform logical operations, and return either **true or false**
// Used a bunch to combine comparison operations results to make a decision!
// && - The Logical 'and' operator: it returns true if both operands are true(both have to be true to return true)
// || - The Logical 'or' operator: it returns true if only one operand is true(both can be true but only one needs to be true for it to return true)
// ! - The Logical 'not' operator: it returns the opposite of an evaluation or comparison, either true or false
    
    // let x = 7 
    // let y =10
    // const isValidNumber = x > 8 && 8 > y
    // console.log(isValidNumber)





// 5:           String operator
// use '+' operator to perform concatenation of strings



// 6:           Ternary operator (?)
// returns a value based on a condition

// const isEvenNumber = 10 % 2 === 0 ? true : false;


// *************************************************************TYPE CONVERSION*********************************************************

        // Two types in JS
        // 1. Implicit conversion: JS itself will convert the type automatically
        // 2. Explicit conversion: Where you manually convert the type


        // Implicit conversion

        // console.log("3" + 4); // Result: 34 (When adding a *numeric string* to a *number* JS automatically converts the number 4 to a string)
        // console.log("3" + true); // Result: 3true (When adding a *numeric string* to a *boolean* JS automatically converts true to a string then concatenates)
        // console.log("3" - "2"); // Result: 1 (When subtracting  *numeric strings* JS converts the strings to numbersbefore performing the subtraction operation *)
        // console.log("4" * "2"); // Result: 8 (When multiplying *numeric strings* JS converts the strings to numbersbefore performing the multiplication operation)
        // console.log("4" / "2"); // Result: 2 (When dividing *numeric strings* JS converts the strings to numbersbefore performing the division  operation)


        //  //NaN
            // trying to use non-numeric-strings will result in NaN :not a number
            // console.log('Yannick' - 'Wade'); // Result: NaN

        //  // Operations with Undefined:  if you use undefined with number, boolean or null the result is NaN
            // console.log(3 + undefined); // Result: NaN

        // // Operations with Null, Booleans & numbers or numeric strings : true is = 1 and false is = 0
            // console.log(5 + true); // Result: 6
            // console.log('5' + true); // Result: 5true (concatenates)
            // console.log('5' - true); // Result: 4
            // console.log('5' * true); // Result: 5
            // console.log('5' * false); // Result: 0 (false is  = 0 here )
            // console.log('5' + null); // Result: 5null (concatenates )
            // console.log('5' - null); // Result: 5 (null is zero here (same for * and /, but not for +, if there is a string it will concatenate)
            // console.log(5 + null); // Result: 5 ( converts null to 0 then adds to 5, resu;lt of 5 + 0 is 5 )


    // Explicit Conversion

            // Converting to number from string, boolean, null
                        // **Using The Global Number() Method
            // console.log(Number("5")); // Result: 5 (converts the string "5" to the number 5)
            // console.log(Number(true)); // Result: 1 (converts the boolean true to the number 1)
            // console.log(Number(null)); // Result: 0 (converts null to the number 0)
            
                        // **Using The Global parseInt() & parseFloat() Methods
            // console.log(parseInt('5')); // Result: 5 (converts the string "5" to the number 5)
            // console.log(parseFloat('5.7')); //  Result: 5.7 (converts the string '5' to the number 5 )


            // Converting to string

            //             // **Using The Global String() Method
            // console.log(String(500)); // Result: '500' (converts the number 500 to the string '500')
            // console.log(String(null)); // Result: '500' (converts null to the string 'null')
            // console.log(String(undefined)); // Result: '500' (converts undefined to the string 'undefined')
            // console.log(String(true)); // Result: '500' (converts true to the string 'true')
            
            //             // **Using The toString() Method **Will not work on null & undefined values
            // console.log((500).toString()); // Result: '500' (converts the number 500 to the string '500')

            // Converting other datatypes to Boolean

            //              //**Using the global Boolean() method

            // console.log(Boolean(10)); // Result: true    
            // ** null, undefined, numeric zero, empty string(without spaces) and NaN all return false when converted to boolean!


    // ********************************************* EQUALITY (JS is weird)************************************

        // Two types: 
            // 1. Double equal: == : this allows coercion when types are different!
            // 2. Tripple Equal: === : this does not allow coercion!

            // eg.1
            //  const var1 = 'test';
            //  const var2 = 'test';

            //  console.log(var1 == var2); // Result: true 
            //  console.log(var1 === var2); // Result: true
            //     // here when the value types are identical, there is no confusion!

            // // eg.2
            // const var3 = 10;
            // const var4 = '10';

            // console.log(var3 == var4); // Result: true (in the case of double equals here, JS coerces values to the same type, 
                                       //the string '10' is converted to the number 10 automatically, and then, compared!)
            
            // console.log(var3 === var4); // Result: false (Tripple equals is more *strict* and ensures that both constants are also of the same type)
                                        // it will not convert values implicitly
                                        // since a number is different from a string type, it returns false
                                        // advice: use tripple equals instead of double equals as a beginner!


    // *******************************************************CONDITIONAL STATEMENTS*************************************************

        // Performs different  actions based on different conditions

        // if, else, else if and switch

        // if, else and else if statements

        // const number = 10;

        // if (number > 10) {
        //     console.log("Number is greater than 10") //code in the curly brace runs only if the condition is true 

        // } else if (number === 10) {
        //     console.log("Number is 10")  // this is like another if statement - it allows you to check multiple conditions

        // }else {
        //     console.log("Number is less than 10")
        // }
                // if else statement
                    // if () {
                    //     code to run    //if you u have two alternate blocks of code to run use if else statement
                    // } else {
                    //     code to run
                    // }

                // else if statement
                    // if () {
                    //     code to run    //if you u have more than two alternate blocks of code to run use else if inside your if statement
                    // } velse if () {
                    //    code to run
                    // } else if () {     // could use multiple else if statements as needed
                    //    code to run
                    // } else {
                    //     code to run
                    // }

            // **if else statements do a good job of enabling conditional code.
            //  theyre good when you have a few alternatives and each have a good chunk of code to be executed.**
            // However, if you have a large number of choices, and a smaller chunk of code to execute in each choice,
            // a switch statement is much better than suited.


// ***********************************************************SWITCH STATEMENTS******************************************************

        // Lets check a color and log that color value to the console.

        // const color = 'blue';    
        // switch (color) {                                       //Switch statement evaluates the expressio within parentheses
        //     case 'green':                                      // and executes the code corresponding to the matching case.
        //         console.log('Color is Green')                  // if there is no matching case, then
        //         break;                                        //|
        //     case 'yellow':                                    //|
        //         console.log('Color is Yellow')                //|
        //         break;                                        //|
        //     case 'blue':                                      //|
        //         console.log('Color is Blue')                  //|
        //         break;                                        //|   
        //     default:                                           // then, the code corresponding to the default case runs
        //         console.log('Not a valid color')           
        // }

                        
        // ***********************************************LOOPING CODE*************************************************************
        
        
            // Loops are used to repeat a block of code.You can achieve a lot with loops they are really important.

                    // For Loop
                    // While Loop
                    // DO..while Loop
                    // For..of Loop

            // *******************for loop & while loop**** : They execute a sequence of code until a given condition is true.
                    

                        // for loop*****************************************
                        
                      //1.  // for(let i = 1; i <= 5; i++){
                            //     console.log('Iteration # is ' + i)
                            // }

                      //2.  // let sum = 0;

                            // for(let i = 1; i <= 5; i++) {
                            //     sum = sum + i;
                            // }
                            // console.log(`Sum is ${sum}`);
                        


                        // while loop***************************************************

                        // let i = 1                                            //initializer   set before the loop
                        //     while (i <= 5) {                                 //condition
                        //         console.log(' Increment # ' + i)             //code to run
                        //         i++;                                         //final expression  inside the loop after the code to run
                        //     }
                        
                            // let sum2 = 0;
                            // let i = 1;
                            // while(i <= 5) {
                            //     sum2 = sum2 + i;
                            //     i++;
                            // }
                            // console.log(`Sum is ${sum2}`)


                        // do while loop***********************runs code block at least once before looping 
                        // because the while condition comes after the code block


                        // let i = 1;   //initializer set before the loop
                        // do {
                        //     console.log(`iteration number is ${i}`)   //code to run
                        //     i++              //final expression inside the loop after the code to run
                        // }while (i <= 10)     //while condition after code block





            // **********************************************for of loop******************************************
            // Used to loop over a collection of data, like an ARRAY.


            // const numbers = [1, 2, 3, 4, 5 ]
            // for(const num of numbers){
            //     console.log(`Iteration number is ${num}`)
            // }

            // abstract away two things:
            // you dont need to keep track of the variable to increment the iteration count
            // you dont have to figure out how to access the location of the items in the collection.



    // ******************************************* FUNCTIONS******************************************
    // A JS function is a block of code that is designed to do/perform a particular task
    // for example: Add or Multiply two numbers
    // They are reusable; defined once, and can be called later with different values(Arguments), resulting in different results.
    // Makes program easy to understand and maintain as: They can be used to divide up a complex problem into smaller chuncks!




    // function greet(firstName/*parameter*/, lastName/*parameter*/){
    //     console.log('Hi my name is ' +  firstName + ' ' + lastName)
    // }

    //         greet('John'/*argument*/, 'Terry'/*argument*/)
    //         greet('Yannick', 'Wade')
    //         greet('Mike', 'Flemming')
    //         greet()

    // a function can Return a value which we can use later in our code
            
        // function add(a, b) {    // a & b are two input parameters
        //     return a + b;       // here we tell the function to return th sum of the two parameters/ 
        //                         // return is a keyword that will return the value of the function when we invoke it
        // }

        // const sum = add(20, 20)
        //  const fullName = add("Yan", " Wa")       // here we call/invoke the function with two arguments add(20, 20) or add('Yan', ' Wa')that correspond to the input parameters
        // console.log(sum)
        // console.log(fullName)

    // **************************Arrow Functions*******************************

    // const arrowFunc = () => {
    //     console.log('This is an arrow function')
    // }
    // arrowFunc()

    
    
    
    // const arrowSum = (a, b) => {        // ****concise/shorter**** version possible if
    //     return a + b;                   // the is only one statement to run in the code block
    //     }                               //in that case you can drop the curly braces and return keyword
                            
    // const sum = arrowSum(5, 5)
    // console.log(sum)


    // const arrowShort = (a, b) => a + b; // HERE IS THE CONCISE VERSION!  YOU CAN ALSO OMIT THE PERENTHESES AROUND THE PARAMETER IF THE FUNC ONLY TAKES 1 ARGUMENT!

    // const short = arrowShort(2, 2);
    // console.log(short); 

            
// *************************************SCOPE IN JS- Helps to understand how vairable values are resolved in JS******************************************
// Scope determins the accessibility and visibility of variables
        //Block Scope - Dictates that variables declared inside a pain of curly braces cannot be accessed from outside the block
        // if(true) {
        //     const myName = 'Yan'
        //     console.log(myName)      //use this for accessing the name from inside the block it was declared in, will print myName to console
        // }
        // console.log(myName)          // If you use this instead, trying to access from outside the block will not! reference erron: myName is defined inside the block and it can't be accessed from outside




        // //Function Scope - Variables declared inside a function are not accessable from outside that function!

        // function testFunc1 () {
        //     const test = console.log('Hi I am a inside a function scope')
        //     return test
        // }

        // function testFunc2 () {
        //     const test = 'Hi I am a within a fn scope'
        //     console.log(test)
        // }


        // testFunc1()
        // testFunc2()




        //Global Scope - The scope outside any block  or function
        //Global scope variables are accessible from within both a block & a function
        // A globally scoped variable will not override block or function scoped vaiables

            // let num = 15

            // //in a function
            // const printNum = () =>{
            //     console.log(num)
            // }
            // printNum()

            // // in a block
            // if(true) {
            //     console.log(num)
            // }