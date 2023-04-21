function decode(str){
    let message=[];
    let count = 0;
    str = [...str.toLowerCase()];
    str.forEach(element => {
        if(/\d/.test(element)){
            if(element>0){
                count+=element;
            }
        }
        if(count > 0 && element.match(/[a-z]/i)){
            count--;
        }else if(count === 0 && element.match(/[a-z]/i)){
            message.push(element)
        }
    });
    return message.join();
}
// let msg = '0h2xce5ngbrdy'
// let msg = '3vdfn'
let msg ='2bna0p1mp2osl0e'

console.log(decode(msg))