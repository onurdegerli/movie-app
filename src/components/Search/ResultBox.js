import React from 'react';

class SearchResultBox extends React.Component {
    constructor(props) {
        super(props);
        this.defaultPoster = 'https://via.placeholder.com/348x500?text=No%20Poster';
        this.state = {
            isInWishList: false,
            isInWatchedList: false,
        };
    }

    handleAddToWhishlist() {
        this.setToLocalStorage('wishList');
        this.setState({
            isInWishList: true,
        });
    }
    
    handleRemoveFromWhishlist() {
        this.removeFromLocalStorage('wishList');
        this.setState({
            isInWishList: false,
        });
    }
    
    handleAddToWatch() {
        this.setToLocalStorage('watchedList');
        this.setState({
            isInWatchedList: true,
        });
    }

    handleRemoveFromWatch() {
        this.removeFromLocalStorage('watchedList');
        this.setState({
            isInWatchedList: false,
        });
    }

    setToLocalStorage(key) {
        let list = JSON.parse(localStorage.getItem(key));
        if (!list) {
            let newList = {};
            newList[this.props.result.imdbID] = this.props.result;
            localStorage.setItem(key, JSON.stringify(newList));
        } else {
            list[this.props.result.imdbID] = this.props.result;
            localStorage.setItem(key, JSON.stringify(list));
        }

        return true;
    }
    
    removeFromLocalStorage(key) {
        let list = JSON.parse(localStorage.getItem(key));
        if (!list) {
            return true
        } 

        delete list[this.props.result.imdbID]; 
        localStorage.setItem(key, JSON.stringify(list));

        return true;
    }

    checkInLocalStorage(key) {
        let list = JSON.parse(localStorage.getItem(key));
        return list && list[this.props.result.imdbID]
            ? true
            : false;
    }

    componentDidMount() {
        const poster = this.props.result.Poster !== 'N/A'
            ? this.props.result.Poster
            : this.defaultPoster;

        this.setState({
            isInWishList: this.checkInLocalStorage('wishList'),
            isInWatchedList: this.checkInLocalStorage('watchedList'),
            poster: poster,
        });
    }

    render() {
        return (
            <div className="col-md-4" key={this.props.result.imdbID}>
                <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={this.state.poster} alt={this.props.result.Title} />
                    <div className="card-body">
                        <p className="card-text">{this.props.result.Title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                {!this.state.isInWishList ? (
                                    <button 
                                        type="button" 
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={() =>
                                            this.handleAddToWhishlist()
                                        }
                                    >
                                        Add to wish
                                    </button>
                                ) : (
                                    <button 
                                        type="button" 
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={() =>
                                            this.handleRemoveFromWhishlist()
                                        }
                                    >
                                        Wished
                                    </button>
                                )}

                                {!this.state.isInWatchedList ? (
                                    <button 
                                        type="button" 
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={() =>
                                            this.handleAddToWatch()
                                        }
                                    >
                                        Add to watch
                                    </button>
                                ) : (
                                    <button 
                                        type="button" 
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={() =>
                                            this.handleRemoveFromWatch()
                                        }
                                    >
                                        Watched
                                    </button>
                                )}
                            </div>
                            <small className="text-muted">{this.props.result.Year}</small>
                        </div>
                    </div>
                </div>
            </div>
        )  
    }
}

export default SearchResultBox;