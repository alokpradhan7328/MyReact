import Movie from "./Movie";
import moviesData from "./data";

function Movies(){
    return(
        <div className="movies">
            {
               moviesData.map((m)=>(<Movie url={m.image} tittle={m.tittle}/>))
            }
        </div>
    )
}
export default Movies;