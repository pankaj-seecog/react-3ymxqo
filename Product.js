import React from 'react';

class Product extends React.Component{

render(){
 return ( 
   <div>
<img src={this.props.pic} width="200" height="200"/>
<p>
Name : {this.props.name}
</p>
<p>
Cost : Rs {this.props.cost}
</p><hr/>
  </div>
 )
}

}

export default Product;