import React, { Component } from 'react';
import Counter from '../Counter/Counter';

class Counters extends Component {


    render() { 
        return ( 
            <div>
                 <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-1">Reset</button>
                 <b>Items</b><span className="badge badge-pill badge-secondary m-2">{this.props.totalCount}</span>
                {this.props.counters.map(counter =>
                    <Counter key={counter.id} 
                    counter={counter} 
                    onDelete={this.props.onDelete} 
                    onIncrement={this.props.onIncrement}>
                        <h2>Title</h2>
                    </Counter>

                  
                )};
            </div>
         );
    }
}
 
export default Counters;