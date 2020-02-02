import React from 'react';

class SearchResultBox extends React.Component {
    render() {
        return (
            <div className="col-md-4" key={this.props.result.imdbId}>
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top" src={this.props.result.Poster} alt={this.props.result.Title} />
                    <div className="card-body">
                        <p className="card-text">{this.props.result.Title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Wishlist</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Watched</button>
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