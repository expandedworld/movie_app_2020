import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';


//import PropTypes from 'prop-types';

/*function Food({name, picture, rating}) {
  return (
  <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name}/>
    <h4>{rating}/5.0</h4>
  </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.CdRnzy-FW8tEQTWrbUhL_QHaE8%26pid%3DApi&f=1',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v0RiALj-qb0tA3TaocYnVAHaE7%26pid%3DApi&f=1',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbop',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.TyqKdm936XUIYdpzHOOetgHaE8%26pid%3DApi&f=1',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.i8QXAZk_m58ZVz15_9ijmAHaE8%26pid%3DApi&f=1',
    rating: 4.1,
  },
  {
    id:5,
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.2YUaIoPRQXoWiRm7mUj3WAHaEK%26pid%3DApi&f=1',
    rating: 3.5,
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};
*/


/*
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello');
  }
  state = {
    count: 0,
  };

add = () => {
  this.setState(current => ({
    count : current.count + 1,
   }));
};

minus = () => {
  this.setState(current => ({
    count : current.count - 1,
  }));
};

componentDidMount() {
  console.log('component rendered');
}

componentDidUpdate() {
  console.log('I just updated');
}

componentWillUnmount() {
  console.log('Goodbye, cruel world');
}

  render() {
    console.log("I'm rendering");
    return ( 
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
*/

/*class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    //영화 데이터 로딩!
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div> 
      ) : (
      <div className="movies"> 
      {movies.map(movie => (
       <Movie
          key={movie.id} 
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
        />
      ))}
    </div>
     )}
    </section>
    );
  }
}*/

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact= {true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
