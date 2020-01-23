$(document).ready(function () {
    $('#carouselExampleInterval').carousel(4)


    const url = 'https://sky-frontend.herokuapp.com/movies';
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: loadMovies,
        error: error
    });

    function loadMovies(data) {
        movies = data;
        console.log(movies);
        moviesHighlight(movies);
        moviesMenu(movies);
    }
    function error(e) {
        console.log(e)
    }
    let movies = "";

    function moviesHighlight(movies) {
        moviesHighlight = movies.filter(function (i) {
            return i.type == "highlights"
        })
        let primeiroItem = moviesHighlight[0].items[0].title;
        moviesHighlight[0].items.map(function (i) {
            if(i.title == primeiroItem){

            let poster = `<div class="carousel-item active img-carousel" data-interval="10000">
                    <img  class="d-block w-100" height="300px" src="${i.images[0].url}" alt="${i.title}"> </div>`
            $('.carousel-inner').append(poster)
        }
        else{
            let poster = `<div class="carousel-item" data-interval="10000">
                    <img title= "${i.title}" class="d-block w-100" height="300px" src="${i.images[0].url}" alt="${i.title}"> </div>`
            $('.carousel-inner').append(poster)
        }
        })
    }

    function moviesMenu(movies) {

        moviesCarrosel = movies.filter(function (i) {
            return i.type == "carousel-portrait"
        })

        moviesCarrosel[0].movies.map(function (i) {
            if(i.categories.indexOf("Ação")  != -1){ 
                let classificacao = `<div class=" row col-12 acao">
                <div class="col-12">
                <p>Ação</p>
              </div>
              </div>`
              $('.menu').append(classificacao)
                let poster =  
                `<div class="m-2">
               <img src="${i.images[0].url}" alt="${i.title}" width="150" height="200"> </div>`

                      $('.acao').append(poster)
            }
            else if(i.categories.indexOf("Suspense")  != -1){ 
                let poster =  
                `<div class="m-2">
               <img src="${i.images[0].url}" alt="${i.title}" width="150" height="200"> </div>`

                      $('.suspense').append(poster)
            }
            else if(i.categories.indexOf("Comédia") != -1){ 
                let poster =  
                `<div class="m-2">
               <img src="${i.images[0].url}" alt="${i.title}" width="150" height="200"> </div>`

                      $('.comedia').append(poster)
            }
            else{
                let poster =  
                `<div class="m-2">
               <img src="${i.images[0].url}" alt="${i.title}" width="150" height="200"> </div>`

                      $('.outros').append(poster)
            }

                     
        })
    }

    // $("div").hover(function(){
    //     $(this).text("teste")
    // })
})