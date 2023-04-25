function makeUnique(str){
    console.log([...new Set(str)].join(''))
}

makeUnique('helloworld')
makeUnique('iwanttoclimbamountain')