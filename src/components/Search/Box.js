import React from 'react';
import axios from 'axios';

class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: 'new',
        }

        this.handleChangeQuery = this.handleChangeQuery.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeQuery(event) {
        this.setState({
            query: event.target.value
        })
    }
    
    handleSubmit(event) {
        axios.get(this.props.apiUrl, {
            params: {
              s: this.state.query,
              apikey: this.props.apiKey
            }
          })
          .then((response) => {
            this.props.handleResults(
                response.data.totalResults, 
                response.data.Search
            );
          })
          .catch((error) => {
            console.log(error);
          });

        event.preventDefault();
    }

    render() {
        return (
            <section className="jumbotron text-center">
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <h1 className="jumbotron-heading">Movies</h1>
                        <p className="lead text-muted">Search your favourite movie</p>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-4">
                                <input 
                                    className="form-control"
                                    type="text" 
                                    value={this.state.query}
                                    onChange={this.handleChangeQuery}
                                />
                                <button className="btn btn-secondary my-2">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}

SearchBox.defaultProps = {
    apiUrl: 'http://www.omdbapi.com',
    apiKey: 'c7627767',
}

export default SearchBox;