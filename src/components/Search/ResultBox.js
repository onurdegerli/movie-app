import React from 'react';

class SearchResultBox extends React.Component {

    handleWhishlist(imdbID) {
        if (!imdbID) {
            return;
        }

        let wishList = JSON.parse(localStorage.getItem('wishList'));
        if (!wishList) {
            let newWishList = [];
            newWishList[0] = imdbID
            localStorage.setItem('wishList', JSON.stringify(newWishList))
        } else {
            wishList[wishList.length + 1] = imdbID;
            localStorage.setItem('wishList', JSON.stringify(wishList))
        }
    }
    
    handleWatched(imdbID) {
        console.log(imdbID);
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
                                <button 
                                    type="button" 
                                    className="btn btn-sm btn-outline-secondary"
                                    onClick={this.handleWhishlist.bind(this, this.props.result.imdbID)}
                                >
                                        Wishlist
                                    </button>
                                <button 
                                    type="button" 
                                    className="btn btn-sm btn-outline-secondary"
                                    onClick={this.handleWatched.bind(this, this.props.result.imdbId)}
                                >
                                    Watched
                                </button>
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