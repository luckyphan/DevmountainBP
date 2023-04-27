


let query = document.querySelector('input')
let searchBtn = document.querySelector('button')

const submitHandler = (event) =>{
    event.preventDefault();

    let pokemon = query.value;

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) =>{
    console.log(res.data);
    console.log(res.data.sprites.front_default);

    let img = document.querySelector('#pokeImg')
    img.src = res.data.sprites.front_default;

    // multiple images
    /**
     * let imgs = document.querySelectorAll('.pokeImgs')
     * imgs.forEach(el => el.src = res.data.sprites.front_default);
     */

}).catch(err => console.log(err))
}

searchBtn.addEventListener('click', submitHandler)

