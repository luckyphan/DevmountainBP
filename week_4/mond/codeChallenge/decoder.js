alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function shiftLetters(str){
    let shiftBy = Number(str.toLowerCase().charAt(0))
    let newStr = str.substr(1).toLowerCase().split('');
    let decoded = []
    newStr.forEach(element => {
        if(!alphabet.includes(element)){
            shiftBy = Number(element)
            //get the following string after the element and push to array
            newStr = str.substr(indexOf(shiftBy+1)).toLowerCase().split('');
        }
        let ind = 0
        ind = alphabet.indexOf(element) + shiftBy;
        if(ind > 24){
            ind -= 26
        }
        // console.log(ind)
        decoded.push(alphabet[ind])
    });
    console.log(decoded.join(""))
}

let decode = '4i';
shiftLetters(decode);