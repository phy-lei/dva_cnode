import React from 'react';
import {withRouter} from 'dva/router'
import {connect} from "dva"
class Child extends React.Component{
  
  
  handleClick(){
    this.props.history.push('/')
  }
  render(){
    
    return (
      <div className="home">
        <button onClick={this.handleClick.bind(this)}>首页</button>
      </div>
    );
  }
  
}



export default connect()(withRouter(Child))
