$(document).ready(function () {
    $('#carouselIndicators').carousel()
    const url = 'https://sky-frontend.herokuapp.com/movies';
    // const url = 'https://sky-frontend.herokuapp.com/moviess';
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: loadMovies,
        error: error
    });

    let movies = "";
    function loadMovies(data) {
        movies = data;
        moviesHighlight(movies);
        moviesMenu(movies);
    }
    function error() {
        $("main").hide();
        var erroMensage = `
        <div class="card mb-3"">
        <div class="row no-gutters">
          <div class="col-md-4">
          <div class="card-body d-flex justify-content-end">
          <i class="fas fa-exclamation-triangle"></i>
          </div>
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <p class="card-text"> Sistema Temporariamente Indisponível</p> 
            </div>
          </div>
        </div>
      </div>`
        $(".erroMensagem").append(erroMensage)
    }


    function moviesHighlight(movies) {
        moviesHighlight = movies.filter(function (item) {
            return item.type == "highlights"
        })
        let primeiroItem = moviesHighlight[0].items[0].title;
        moviesHighlight[0].items.map(function (item) {
            if (item.title == primeiroItem) {
                let poster = `<div class="carousel-item active img-carousel" data-interval="10000">
                    <img  title= "${item.title}" class="d-block w-100" height="300px" src="${item.images[0].url}" alt="${item.title}"> </div>`
                $('.carousel-inner').append(poster)
            }
            else {
                let poster = `<div class="carousel-item" data-interval="10000">
                    <img title= "${item.title}" class="d-block w-100" height="300px" src="${item.images[0].url}" alt="${item.title}"> </div>`
                $('.carousel-inner').append(poster)
            }
        })
    }

    function moviesMenu(movies) {
        moviesCarrosel = movies.filter(function (item) {
            return item.type == "carousel-portrait"
        })
        moviesCarrosel[0].movies.map(function (movie) {
            if (movie.categories.indexOf("Ação") != -1) {
                let poster =
                    `<div class="m-2">
               <img src="${movie.images[0].url}"  title= "${movie.title}"alt="${movie.title}" width="190" height="200"> </div>`
                $('.acao').append(poster)
            }
            else if (movie.categories.indexOf("Suspense") != -1) {
                let poster =
                    `<div class="m-2" col-3>
               <img src="${movie.images[0].url}"  title= "${movie.title}" alt="${movie.title}" width="190" height="200"> </div>`
                $('.suspense').append(poster)
            }
            else if (movie.categories.indexOf("Comédia") != -1) {
                let poster =
                    `<div class="m-2">
               <img src="${movie.images[0].url}"  title= "${movie.title}"alt="${movie.title}" width="150" height="200"> </div>`
                $('.comedia').append(poster)
            }
            else {
                let poster =
                    `<div class="m-2">
               <img src="${movie.images[0].url}"  title= "${movie.title}" alt="${movie.title}" width="150" height="200"> </div>`
                $('.outros').append(poster)
            }
        })
    }
})