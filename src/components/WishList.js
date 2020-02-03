import React from 'react';
import SearchBox from './Search/Box';
import SearchResults from './Search/Results';

class WishList extends React.Component {

    constructor(props) {
        console.log('wishlist');
        super(props);
        const wishList = JSON.parse(localStorage.getItem('wishList'));
        this.state = {
            total: wishList.length,
            results: wishList,
        };
    }

    render() {
        return (
            <div>
                <SearchBox />
                <SearchResults total={this.state.total} results={this.state.results} />
            </div>
        );
    }
}

export default WishList;