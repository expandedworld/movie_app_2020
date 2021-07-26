import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
        return (
        <div className="wrapper">
            
                <img className="poster" src={location.state.poster} alt={location.state.title}></img>
            
            <h2>
                {location.state.title}
            </h2>
            <p className="year">
                {location.state.year}
            </p>
            <div className="genres">
                <ul>
                {location.state.genres.map((genre, index) => {
                            return (
                                <li key={index} className="movie__genres">
                                    {genre}
                                </li>
                            );    
                        })}
                </ul>
            </div>
            <p className="summary">{location.state.summary}</p>
        </div>
        );
            
        } else {
            return null;
        }
    }
}

export default Detail;