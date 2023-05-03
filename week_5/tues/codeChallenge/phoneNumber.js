function createPhoneNumber(arr){
    let phoneNumber =['('];
    let phoneNumber2 =[];
    arr.forEach(element => {
        if(phoneNumber.length === 1){
            phoneNumber.push(element);
        }
        else if(phoneNumber.length === 4){
            phoneNumber.push(')');
            phoneNumber2.push(element);
        }
        else if(phoneNumber.length === 5){
            //push the 4 into the second arr 
            if(phoneNumber2.length === 3){
                phoneNumber2.push('-');
                phoneNumber2.push(element);
            }
            else{
                phoneNumber2.push(element);
            }
        }
        else{
            phoneNumber.push(element);
        }
    });
    console.log(phoneNumber.join('')+' '+phoneNumber2.join(''));
}



createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])