    import React, {Component} from 'react';
    import Movie from './Movie'

    class MovieApp extends Component{
        constructor(){
            super();
            this.state = { movieData: []}
            // this.handleSubmit.this.handleSubmit.bind(this);
        }

        componentDidMount(){
            const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
            console.log("component mounted!!")
            fetch(url).then((response)=>{
                return response.json();
            }).then((movieJSON)=>{
                // this.state.movieData = movieJSON   dont ever do this!!!
                this.setState({
                    movieData: movieJSON.results
                })
            })
        }
        //every event gets an event parameter.
        handleSubmit = (event) => {      //rocket function keeps 
            event.preventDefault();
            console.log("user submitted form.")
            const movieTitle = document.querySelector("#search-terms").value
            console.log(movieTitle)
        }


      
        render(){
            console.log("rendered. ")
            const movies = this.state.movieData.map((movie, i)=>{
                // console.log(">>>>>>>", movie)
                // console.log("<<<<<<", movie.poster_path)
                // console.log(this.state.movieData[0].id)
                return(
                    <Movie movie={movie} key={i}/>
                )
            })
                // console.log("lll", movies)
                // console.log(movies[0])
            return(
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" id="search-terms" placeholder="Enter a movie title" />
                            <input type="submit"  className="btn btn-primary" value="Search!" />
                        </form>
                    </div>
                    <div className="row">
                        {movies}
                    </div>
                </div>
            )
        }
    }

    export default MovieApp;