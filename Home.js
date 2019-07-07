import React from 'react';
import Login from './Login'
class Home extends React.Component{
render(){
  return (
    <div>
<h2>Inside the home component</h2>
<Login/>
<Login/>
<Login/>
<Login/>
    </div>
  )
}
}
export default Home;