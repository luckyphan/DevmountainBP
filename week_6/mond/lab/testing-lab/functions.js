module.exports = {
    returnTwo: () => {
        return 2;
    },
    arentNum(num1,num2){
        if (typeof num1 != "number" || typeof num2 != "number"){
            return true;
        }
    },
    greeting:(name) => {
        return `Hello, ${name}`
    },
    add:(num1,num2)=>{
        return(module.exports.arentNum(num1,num2) ? NaN : num1 + num2);
    },
    multiply:(num1,num2)=>{
        return(module.exports.arentNum(num1,num2) ? NaN : num1 * num2);
    },
    divide:(num1,num2)=>{
        return(module.exports.arentNum(num1,num2) ? NaN : num1 / num2);
        
    },
    subtract:(num1,num2)=>{
        return(module.exports.arentNum(num1,num2) ? NaN : num1 - num2);
    }
}