import React from 'react';

class Body extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
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

export default Body;