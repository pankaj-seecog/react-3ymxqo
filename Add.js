import React from 'react';
class Add extends React.Component{

constructor(){
  super();
  this.state = {
    a : "",
    b : "",
    c : 0
  }
}

addNumbers = () =>{
// this.state.c = this.state.a+this.state.b
this.setState({
  c : parseInt(this.state.a)+parseInt(this.state.b)
})
}

render(){
  return (
    <div>
<p>
First Number : <input onChange={(evt)=>this.setState({a : evt.target.value})} value={this.state.a} />
</p>
<p>
Second Number : <input onChange={(evt)=>this.setState({b : evt.target.value})} value={this.state.b} />
</p>
<p>
The sum is {this.state.c}
</p>
<p>
<button onClick={this.addNumbers}>Add Numbers</button>
</p>
    </div>
  )
}

}

export default Add;