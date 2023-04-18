function checkVowels(word){
    let vowels = [];
    const arr = word.split("");
    arr.forEach((elem) => {
        if(elem.match(/[aeiou]/ig)){
            vowels.push(elem)
        }
    }
)
    let consanants = word.length - vowels.length;
    return (vowels.length > consanants ? 'has more vowels'  : 'has more consonants')
}

//const hasMoreVowels = (word) => word.toLowerCase().split('').filter((x => ['a', 'e', 'i', 'o', 'u'].includes(x))).length >= (word.length/2)
//const hasMoreVowels = (word) => word.match(/[aeiou]/gi).length > Math.floor(word.length/2)
console.log(checkVowels('heeehee'))
console.log(checkVowels('hhhhi'))