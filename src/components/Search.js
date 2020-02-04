import React from 'react';
import SearchBox from './Search/Box';
import SearchResults from './Search/Results';

class Search extends React.Component {

    constructor(props) {
        // localStorage.removeItem('wishList')
        // localStorage.removeItem('watchedList')
        super(props);
        this.state = {
            total: 0,
            results: [],
            error: '',
        }
        this.handleResults = this.handleResults.bind(this)
    }

    handleResults(total, results, error) {
        this.setState({
            total: total,
            results: results,
            error: error,
        });
    }

    render() {
        return (
            <div>
                <SearchBox handleResults={this.handleResults} />
                <SearchResults 
                    total={this.state.total} 
                    results={this.state.results}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default Search;