let form = document.querySelector('form')
let message = document.querySelector('#message')

const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input')

    let movie = document.createElement('li')

    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click',crossOffMovie)
    movie.appendChild(movieTitle)
    var deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector("ul").appendChild(movie)
    inputField.value = ""
}

const deleteMovie = (event) => {
    message.textContent = `${event.target.parentNode.firstChild.textContent} has been deleted`
    event.target.parentNode.remove()
    revealMessage()
}

const crossOffMovie = (event) =>{
    //change textContent of element that was clicked
    const which = event.target.textContent
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = `${which} has been watched`
    }else{
        message.textContent = `${which} has not been watched`
    } 
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(()=>{
        message.classList.add('hide')
        return true;
    }, 1000)
}

form.addEventListener('submit',addMovie)
