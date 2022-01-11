// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// id del post,
// numero progressivo da 1 a n nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>

const arrayPost = [
    {
        id: 1,
        name:'Phil Mangione',
        photo:'https://unsplash.it/300/300?image=',
        date:'10-31-2021',
        text:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.',
        image:'https://unsplash.it/600/300?image=171',
        like:123,
    },
    {
        id: 2,
        name:'Kat Edison',
        photo:'https://unsplash.it/300/300?image=',
        date:'12-12-2021',
        text:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.',
        image:'https://unsplash.it/600/300?image=171',
        like:134,
    },
    {
        id: 3,
        name:'Jane Brady',
        photo:'https://unsplash.it/300/300?image=',
        date:'01-11-2022',
        text:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.',
        image:'https://unsplash.it/600/300?image=171',
        like:97,
    },
];

//Prendendo come riferimento il layout di esempio presente nell’html, 
//stampiamo i post del nostro feed.

let postHtml = document.getElementById('container'); 

for (let i=0; i<arrayPost.length; i++) {

    const card = arrayPost[i];

    postHtml.innerHTML = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${card.photo}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${card.name}</div>
                    <div class="post-meta__time">${card.date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${card.text}</div>
        <div class="post__image">
            <img src="${card.image}" alt="">
        </div> 
        <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                    </div>
                </div> 
            </div>            
        </div>`
    console.log(card);
};

//Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone 
//e incrementiamo il counter dei likes relativo.
//Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
document.addEventListener("click", function(){
    document.querySelector('.like-button__label').style.color ='red';
    
});


