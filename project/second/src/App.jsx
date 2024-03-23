import Movies from "./Movies";
import React, { Component } from "react";


class App extends Component{
    render(){
        return(
        <div className="App">
          <div>
          <h2><u>Popular On Netflix</u></h2>
            <Movies/>
          </div>
          <div>
          <h2><u>Comedy Movies</u></h2>
           <comedyMovies/>
          </div>
        </div>
    )
}
}
export default App;