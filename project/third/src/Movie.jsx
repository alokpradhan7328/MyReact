function Movie(props){
    const {tittle,url}=props;
    return(
        <div className="test">
            <img src={url} alt="Movies"/>
            <h2>{tittle}</h2>
        </div>
    )
}
export default Movie;