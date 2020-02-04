import React from 'react';
import SearchResults from './Search/Results';

class WatchedList extends React.Component {

    constructor(props) {
        super(props);
        const watchedListObj = JSON.parse(localStorage.getItem('watchedList'));
        const watchedList = Object.values(watchedListObj)
        this.state = {
            total: watchedList.length,
            results: watchedList,
            title: 'Watched Movies',
        };
    }

    render() {
        return (
            <div>
                <SearchResults 
                    total={this.state.total} 
                    results={this.state.results} 
                    title={this.state.title}
                />
            </div>
        );
    }
}

export default WatchedList;