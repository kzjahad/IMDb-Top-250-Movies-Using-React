import React, {Component} from 'react'
import axios from 'axios';
import fetchMovies from './service/fetch_movies';

class App extends Component {
  state = {
    data:{},
  } 
  componentDidMount = () => {
    axios.get('')
        .then(response => {
            this.setState({ ...this.state, data: fetchMovies() });
        })
        .catch(err => {
            console.log(err)
        });
  }

  render() { 
    const items = this.state.data.items || [];
    return (
      <div className="App">
      <div className="container">
        <br/>
        <div className='row'>
          <div className='col-md-6'>
            <p class="h2 mb-0">IMDb Top 250 Movies</p>
            <p><small className='disabled'>IMDb Top 250 as rated by regular IMDb voters.</small></p>
          </div>
          <div className='col-md-6'>
          <p><small>Developed by <a className='link' href='https://www.facebook.com/mkzjahad/'><i class="fa-brands fa-facebook"></i> KZJAHAD</a></small></p>
          <p><small>Source code here <a className='link' href='https://www.facebook.com/mkzjahad/'><i class="fa-brands fa-github"></i> KZJAHAD</a></small></p>
          </div>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Poster</th>
              <th scope="col">Rank</th>
              <th scope="col">Title</th>
              <th scope="col">IMDbRating</th>
              <th scope="col">Total Ratings</th>
              <th scope="col">Your Rating</th>
            </tr>
          </thead>
          {
            items.map((item) => {
              const id = item.id;
              const rank = item.rank;
              const title = item.title;
              const year = item.year;
              const image = item.image;
              const imDbRating = item.imDbRating;
              const imDbRatingCount = parseInt(item.imDbRatingCount);
              return(
                <tr key={id}>
                  <td className='data'><img className='poster' src={`${image}`} alt="poster"/></td>
                  <td className='data' >{ rank }.</td>
                  <td className='data'><a href='#index.html' className='title'>{title}</a>({year})</td>
                  <th className='data'><i className='fa-solid fa-star yellow-star'></i> {imDbRating}</th>
                  <td className='data'>{imDbRatingCount}</td>
                  <td className='data'><i class="fa-regular fa-star ash-star"></i></td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
    );
  }
}

export default App;
