function makeUnique(str){
    var letters = new Set();
    const arr = str.split("");
    arr.forEach(ltr => {
        letters.add(ltr);
    });
    console.log([...letters].join(''))
}

makeUnique('helloworld')
makeUnique('iwanttoclimbamountain')