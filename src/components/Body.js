import React from 'react';
import SearchBox from './Search/Box';
import SearchResults from './Search/Results';

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            results: [],
        }
        this.handleResults = this.handleResults.bind(this)
    }

    handleResults(total, results) {
        this.setState({
            total: total,
            results: results,
        });
    }

    render() {
        return (
            <div>
                <SearchBox handleResults={this.handleResults} />
                <SearchResults total={this.state.total} results={this.state.results} />
            </div>
        );
    }
}

export default Body;