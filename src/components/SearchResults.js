import React from 'react';
import SearchResultBox from './SearchResultBox'

class SearchResults extends React.Component {
    render() {
        return (
            <div className="album py-5 bg-light">
                <div className="container">
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