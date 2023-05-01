function outlier (arr){ 
    let even = []
    let odd = []
    arr.forEach(element => {
     element % 2 === 0 ? even.push(element) : odd.push(element);
    });
    return even.length === 1 ? even.toString() : odd.toString();
}

// let arr = [2, 4, 0, 100, 4, 11, 2602, 36]
let arr = [160, 3, 1719, 19, 11, 13, -21] 
console.log(outlier(arr))