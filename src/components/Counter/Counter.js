import React, { Component } from 'react';

class Counter extends Component {

    state={
        // count: this.props.counter.value,
        // imageUrl: 'http://picsum.photos/200',
        tags: ['tag1','tag2','tag3']
    }

    styles={
        fontSize: 30,
        fontWeight:'bold'
    }
    
    formatCount(){
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    // OR

    // obj destructuring
    // const {count} = this.props.counter;
    // return count === 0 ? 'Zero' : count;
    }

    button_modify(){
        let classes = 'badge m-2 '
        classes += this.props.counter.value === 0 ? 'badge-warning' : 'badge-primary';
        return classes;
    }

    renderTags(){
      console.log(this.props, " proprs")
        if(this.state.tags.length === 0) return <p>There are no tags</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li> )}</ul>;
    }

    render() { 
        return (
          <div>
            {/* <img src={this.state.imageUrl} alt=""/> */}
            <h2>{this.props.counter.title}</h2>
            <span style={{ fontSize: 30 }} className={this.button_modify()}>
              {this.formatCount()}
            </span>
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              Increment
            </button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            <div>
              {this.state.tags.length === 0 && "Please create a new tag...!!!"}
              {this.renderTags()}
            </div>
          </div>
        );   
    }
}
 
export default Counter;