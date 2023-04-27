function has_balanced_parens(str){
    var open = (str.match(/\(/g) || []).length;
    var close = (str.match(/\)/g) || []).length;
    if(open === close) {
        console.log(true);
    } 
    else{
        console.log(false);
    }
}
function has_balanced_parens2(str){
    str = str.replace(/\s/g, "");
    const arr = str.split("");
    var stack = [];
    arr.forEach(char => {
        if (char === '('){
            stack.push('(')
        }
        else if (char === ')'){
            //removes one occurence of open parenth
            if(stack.includes('(')){
                stack.splice(stack.indexOf('('),1)
            }else{
                stack.push('(')
            }
        }
    });
    if(stack.length === 0) {
        console.log(true);
    } 
    else{
        console.log(false);
    }
}

has_balanced_parens2("()")
// true

has_balanced_parens2("(Oh Noes!)(")
// false

has_balanced_parens2("((There's a bonus open paren here.)")

// // false

has_balanced_parens2(")")
// // false

has_balanced_parens2("(")
// // false

has_balanced_parens2("(This has (too many closes.) ) )")
// // false
has_balanced_parens2("Hey...there are no parens here!")

// true
// false
// false
// false
// false
// false
// true