import React from 'react';
import SearchResultBox from './ResultBox'

class SearchResults extends React.Component {
    render() {
        if (this.props.error) {
            return (
                <div className="container">
                    <div className="alert alert-secondary">
                        {this.props.error}
                    </div>
                </div>
            )
        }

        return ( 
            <div className="album py-5 bg-light">
                <div className="container">
                    <h1>{this.props.title}</h1>
                    <div className="row">
                        {this.props.results.map((result, key) =>
                            <SearchResultBox result={result} key={key} />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResults;