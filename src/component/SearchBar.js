import React, { Component } from 'react';
class SearchBar extends Component {
    state = { 
        searchTerm: ''
    };
    changeHandle = (searchTerm) => {
        this.setState({
            searchTerm
        });
        this.props.searchHandle(searchTerm);
    }
    render() {
        return (
            <div className="col-12 searchField">
                <input type="text"  className="form-control" name="searchTerm" value={this.state.searchTerm} onChange={e => this.changeHandle(e.target.value)} placeholder="Search here..."/>
            </div>
        );
    }
}

export default SearchBar;