

function fetchDataForMovieKwanza (){
    fetch(" http://localhost:3000/films/1")
    .then(response => response.json())
    .then(MovieKwanzaData => {
        console.log(MovieKwanzaData);
        displayMovieKwanza(MovieKwanzaData)
    })
} 

 function fetchDataForMovieZote(){
    fetch("http://localhost:3000/films")
    .then(response => response.json())
    .then(MovieZote => {
        console.log(MovieZote);
       displayMovieZote(MovieZote)
    
     })
}


function displayMovieZote(MovieZote){
    const ul = document.querySelector('#films')
        
    MovieZote.forEach(movie => {
        console.log(movie.title);
        const li = document.createElement('li')
        li.innerHTML = `
        <h3>${movie.title}</h3>
        <img src ="${movie.poster}" alt= "">
        <p></p>
        <em>Available Tickets:${movie.capacity - movie.tickets_sold} </em>
        `
        ul.appendChild(li)
    });
         
}

function displayMovieKwanza (MovieKwanzaData){
    const h4 = document.createElement("h4")
    const body = document.querySelector("body");
    h4.innerHTML =`Available tickets: ${MovieKwanzaData.capacity - MovieKwanzaData.tickets_sold}`
}

document.addEventListener("DOMContentLoaded", ()=> {
    fetchDataForMovieKwanza();
    fetchDataForMovieZote();
})