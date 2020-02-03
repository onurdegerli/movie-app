import React from 'react';

class SearchResultBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isInWishList: false,
            isInWatchedList: false,
        };
    }

    handleAddToWhishlist(imdbID) {
        this.setToLocalStorage('wishList', imdbID);
        this.setState({
            isInWishList: true,
        });
    }
    
    handleAddToWatch(imdbID) {
        this.setToLocalStorage('watchedList', imdbID);
        this.setState({
            isInWatchedList: true,
        });
    }

    setToLocalStorage(key, value) {
        let list = JSON.parse(localStorage.getItem(key));
        if (!list) {
            let newlist = [];
            newlist[0] = value
            localStorage.setItem(key, JSON.stringify(newlist))
        } else {

            if (list.indexOf(value) > -1) {
                return true;
            }

            list[list.length] = value;
            localStorage.setItem(key, JSON.stringify(list))
        }

        return true;
    }

    checkInLocalStorage(key, value) {
        let list = JSON.parse(localStorage.getItem(key));
        return list.indexOf(value) > -1
            ? true
            : false;
    }

    componentDidMount() {
        this.setState({
            isInWishList: this.checkInLocalStorage('wishList', this.props.result.imdbID),
            isInWatchedList: this.checkInLocalStorage('watchedList', this.props.result.imdbID),
        });
    }

    render() {
        return (
            <div className="col-md-4" key={this.props.result.imdbID}>
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top" src={this.props.result.Poster} alt={this.props.result.Title} />
                    <div className="card-body">
                        <p className="card-text">{this.props.result.Title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                {!this.state.isInWishList ? (
                                    <button 
                                        type="button" 
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={() =>
                                            this.handleAddToWhishlist(this.props.result.imdbID)
                                        }
                                    >
                                        Add to wish
                                    </button>
                                ) : (
                                    <button 
                                        type="button" 
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={() =>
                                            this.handleRemoveFromWhishlist(this.props.result.imdbID)
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
                                            this.handleAddToWatch(this.props.result.imdbID)
                                        }
                                    >
                                        Add to watch
                                    </button>
                                ) : (
                                    <button 
                                        type="button" 
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={() =>
                                            this.handleRemoveFromWatch(this.props.result.imdbID)
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