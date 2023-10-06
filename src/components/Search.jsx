import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.props.search(this.state.search, this.state.type)
        }
    }

    handleFilter = (event) => {
        this.setState(()=>({type: event.target.dataset.type}), () =>{
            this.props.search(this.state.search, this.state.type)
        })
    }

    render() {
        return <div className="row">
            <div className="col s12">
                <div className="input-field">
                    <input
                        placeholder={"Search"}
                        id="email_inline"
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(event) => this.setState({search: event.target.value})}
                        onKeyDown={this.handleKeyDown}
                    />
                    <button
                        className={"btn search-btn green accent-3"}
                        onClick={() => this.props.search(this.state.search, this.state.type)}
                    >
                        Search
                    </button>
                </div>
                <div className={"filters-btn"}>
                    <label>
                        <input
                            type="radio"
                            className={"with-gap"}
                            name="filter_radio"
                            data-type={"all"}
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>
                            All
                        </span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            className={"with-gap"}
                            name="filter_radio"
                            data-type={"movie"}
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>
                            Films only
                        </span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            className={"with-gap"}
                            name="filter_radio"
                            data-type={"series"}
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>
                            Series only
                        </span>
                    </label>
                </div>
            </div>
        </div>
    }
}

export {Search}