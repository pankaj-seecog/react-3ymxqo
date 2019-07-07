import React from 'react';
import Product from './Product'
class Products extends React.Component{

render(){
  return (//JSX code
<div>
<Product name="Apple" cost="500" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNUFm6_msj2mfACeNO8x8HrWRXDvxBxdp63bFPNW7dnIB5m0Hbg" />
<Product name="Banana" cost="300" pic="https://images-na.ssl-images-amazon.com/images/I/41nx6Ud082L._SX466_.jpg" />
</div>
  )
}

}

export default Products;