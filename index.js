//`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=${page}`

// url: 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D',
async function fetchMovies(page=1){
    try{
        let response=await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=${page}`);

    response=await response.json();
    //console.log(Response);
    renderMovies(Response.results);
    }
    catch(error)
    {
 console.log(error)
}
}
function renderMovies(movies){
    const moviesList=document.getElementById("movies-list");
    moviesList.innerHTML="";
  //  const visibleMovies=movies.map(element => {
        
        movies.forEach((movie)=>{
            
        
        const{poster_path,title,vote_average,vote_count}=movie;
        const listItem=document.createElement("li");
        listItem.className="card";
        let imageSource=poster_path?`${URL}/${poster_path}`:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
        const imageTag=`
        <img
        class='poster'
        src=${imageSource}
        alt=${title}
        />`;
        listItem.innerHTML += imageTag;
        const titleTag=`<p class='title'>${title}</p>`;
        listItem.innerHTML +=titleTag;
        moviesList.appendChild(listItem);
    });
   
}


fetchMovies();