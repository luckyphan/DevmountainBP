function sortProduct(arr){
    //multiply the index with the number
    let indexed= []
    let index = []

    //get the index +1 times the value
    for(let i = 0; i < arr.length; i++){
        arr[i]=( arr[i] * (i+1));
    }
    //copy the arr and then sort
    indexed = [...arr]
    arr.sort(function(a,b){
        return a-b;
    });
    
    //find the index of prev 
    arr.forEach(element => {
        // console.log('index is',indexed.indexOf(element))
        // console.log('original value',(element/(indexed.indexOf(element)+1)))
        index.push(element/(indexed.indexOf(element)+1))
    });

console.log(index)
}

let arr = [23,2,3,4,5]
sortProduct(arr)