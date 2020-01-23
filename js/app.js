 $(document).ready(function(){
     

        let movies = "";
        const url = 'https://sky-frontend.herokuapp.com/movies';
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            success: loadMovvies,
            error: error
          });
     
         function loadMovvies(data) {
        movies = data;
        console.log(movies);
      }
function error(e){
console.log(e)
}


 
})