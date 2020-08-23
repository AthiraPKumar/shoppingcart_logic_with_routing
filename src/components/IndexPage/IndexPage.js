import React, { Component } from 'react';
import Counters from '../Counters/Counters';


class IndexPage extends Component {
    state = { 
        counters:[
            {id:1, value:3, title:'Item-1'},
            {id:2, value:0, title:'Item-2'},
            {id:3, value:0, title:'Item-3'},
            {id:4, value:0, title:'Item-4'}
        ]
     }


     handleDelete = (counterID) => {
     
        const counters = this.state.counters.filter(c => c.id !== counterID);
        console.log(counterID,'Count-id')
        this.setState({counters});
    };
    
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    
    
        // const increment = this.state.counters.value+1;
        // // react is aware of state changes
        // this.setState({value: increment});
    }
    
    
    handleReset = () => {
        const counters = this.state.counters.map(c => {
           c.value = 0;
           return c;
        })
        this.setState({counters});
      }
        
    render() { 
        return (  
            <div>
                <React.Fragment>
                {/* <Navbar totalCount={this.state.counters.filter(c => c.value > 0).length}/> */}
               
                <main className="container">
                    <Counters 
                    totalCount={this.state.counters.filter(c=> c.value > 0).length}
                    counters={this.state.counters}
                    onReset={this.handleReset}  
                    onIncrement={this.handleIncrement} 
                    onDelete ={this.handleDelete} />
                </main>
                </React.Fragment>
            </div>
        );
    }
}
 
export default IndexPage;