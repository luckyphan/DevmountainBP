 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  //basic test uses jest, ( description, callback holding test), check curdir for package.json
  test('should run basic test',() => {
    expect(2).toBe(2)
  })
  // show to use js function and access data from testData

  test('first nmae should be patten',()=>{
    expect(testData.firstName.toLowerCase()).toBe('patten')
  })

  //describe-block for formatTitle
  describe('formatTitle test', () => {
    test('formatTitle should return a string', ()=>{
      let formattedTitle = formatTitle(testData.title)
      expect(typeof formattedTitle).toBe('string')
    });

    test('format title should format the string correctly',() => {
      let formattedTitle = formatTitle(testData.title)
      expect(formattedTitle).toBe('Nulla Ac')
    })
  });

  //describe-block for shorten-bio 
  describe('shortenBio test', () =>{
    test('shortern-bio shortens string', () => {
      let shortBio = shortenBio(testData.bio)
      expect(shortBio.length).toBeLessThan(testData.bio.length)
    });

    test('shorten-bio add .. at the end', () => {
      let shortBio = shortenBio(testData.bio)
      expect(shortBio).toContain('...')// or expect(shortBio.endsWith('...')).toBe(true)
    })
  })

  //describe-block for convertLength 
  describe('convert length tests', () => {

    test('convertLength returns array with two items', () =>{
      let converted = convertLength(testData.length)
      expect(converted.length).toBe(2)
    })

    test('convertLength handles numbers below 60', () => { 
      let converted = convertLength(40)
      expect(converted[0]).toEqual(0)
      expect(converted[1]).toEqual(40)
    })
  })
//it needs to be the exact same object rather than another instance
  test('toBe vs toEqual', () => {
    const myObj = {myNum:4}
    const myObjTwo = myObj
    const myObjThree = {myNum:4}
    expect(myObj).toBe(myObjTwo)

  })