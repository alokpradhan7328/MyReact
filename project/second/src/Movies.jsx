import Movie from "./Movie";
import popularOnNetflix from "./popular";

function Movies(){
    return(
        <div className="movies">
            {
                popularOnNetflix.map((m)=>(<Movie url={m.Image} tittle={m.tittle}/>))
            }
        </div>
    )
}
export default Movies;