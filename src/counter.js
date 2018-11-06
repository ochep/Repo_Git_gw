import React from 'react';
class Counter extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          counterNum: 3
        }
      }
      add = () => {
        this.setState((state) => ({
          counterNum : state.counterNum+1
        }))
      }
      subStract = () => {
        this.setState((state) => ({
          counterNum : state.counterNum-1
        }))
      }
    addValue = (num) => {
      this.setState((state)=> ({
        counterNum:state.counterNum+num
      }))
    }
    render() {
        return ( 
        <div >
        <button onClick={() => this.addValue(-1)} > Kurangin </button>
        <input 
        type="number"
        placeholder="angka"
        value = {this.state.counterNum}
        />   
         <button onClick={() => this.addValue(+1)}> Tambahin </button>
        </div>
        )
    }
}
export default Counter;