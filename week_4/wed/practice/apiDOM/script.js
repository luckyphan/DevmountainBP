
const pokedex = document.querySelector('.berries')


let query = document.querySelector('input')
let searchBtn = document.querySelector('button')

const submitHandler = (event) => {
    event.preventDefault();
    console.log(query.value);

    let berry = query.value

    axios.get(`https://pokeapi.co/api/v2/berry/${berry}/`)
        .then((res) => {
            let flavors = res.data.flavors
            flavors.forEach(element => {
                console.log(element.flavor.name);
                // Create a new paragraph element, and append it to the end of the document body
                const p = document.createElement("p");
                const pText = document.createTextNode(element.flavor.name);
                p.appendChild(pText);
                document.body.appendChild(p);

            });
            
            // let imgs = document.querySelectorAll('.pokeImgs');
            // imgs.forEach(el => el.src = res.data.sprites.front_default)
        })
        .catch(err => console.log(err))
}
searchBtn.addEventListener('click', submitHandler);