import React from 'react';
import SearchResults from './Search/Results';

class WishList extends React.Component {

    constructor(props) {
        super(props);
        const wishListObj = JSON.parse(localStorage.getItem('wishList'));
        const wishList = Object.values(wishListObj)
        this.state = {
            total: wishList.length,
            results: wishList,
            title: 'Wishlist',
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

export default WishList;