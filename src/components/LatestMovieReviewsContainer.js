import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '3Mwu88YR7prUWyU3enzNJrZtvAH2Kkxd';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
+ `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        fetch(URL)
        .then(resp => resp.json())
        .then(resp => this.setState ({reviews: resp.results}))
    }


    render(){
        return(
            <div className='latest-movie-reviews'>
                <h1>Latest Movie Reviews:</h1>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
            
        )
    }
}

export default LatestMovieReviewsContainer

        