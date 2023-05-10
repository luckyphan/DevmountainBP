const functions = require("./functions")

test('returnTwo should return 2', () => {
    expect(functions.returnTwo()).toBe(2)
})

test('greeting should return hello name',() =>{
    expect(functions.greeting('James')).toBe('Hello, James')
    expect(functions.greeting('Jill')).toBe('Hello, Jill') 
    expect(typeof functions.greeting('Lucky')).toBe('string')
})

describe('Math functions',() =>{
    test('add should return the sum of 2 numbers', () => {
        expect(functions.add(1,2)).toBe(3)
        expect(functions.add(5,9)).toBe(14)
        /*added a function to test arguments passed are numbers so not needed
            expect(typeof functions.add()).toBe('number') */
    });
    test('multiply should return the product of 2 numbers', () => {
        expect(functions.multiply(1,2)).toBe(2)
        expect(functions.multiply(5,9)).toBe(45)
        /*added a function to test arguments passed are numbers so not needed
        without function, falsey resulted in failed test because it translates to 0 so expect 0 */
        expect(functions.multiply(5,false)).toBe(45) 
    });
    test('divide should return the quotient of 2 numbers', () => {
        expect(functions.divide(20,5)).toBe(4)
        expect(functions.divide(15,3)).toBe(5)
        /*added a function to test arguments passed are numbers so not needed
        without function, string in the function still results in NaN  */
        expect(functions.divide('aunty',3)).toBe(5)
        
    });
    test('subtract should return the deduction of 2 numbers', () => {
        expect(functions.subtract(12,2)).toBe(10)
        expect(functions.subtract(9,5)).toBe(4)
        //additional arguments get ignored
        expect(functions.subtract(9,5,4)).toBe(4)
    });
})

//this code will result in two NaN for any argument passed that arent numbers 