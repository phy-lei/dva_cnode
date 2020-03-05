import React from 'react'
import {connect} from 'dva'
import Child from './child'

class Products extends React.Component{
  handleSetName(){
    this.props.dispatch({
      //type必填，命名空间/调用的reducers的函数
      type:'productTest/setName',
      //定义传的参数
      data:{
        name:'selea'
      }
    })
  }
  handleSetNameAsync=()=>{
    this.props.dispatch({
      //type必填，命名空间/调用的reducers的函数
      type:'productTest/setNameAsync',
      dt:{
        arr:[1,2,3,4,5]
      }
    })
  }
  handleCnodeAsync=()=>{
    this.props.dispatch({
      //type必填，命名空间/调用的reducers的函数
      type:'productTest/cnodeTest',
      
    })
  }
  componentDidMount(){
    console.log(this.props);
    
  }
  render(){
    console.log(this.props);
    
    return(
      <div>
        {/*标题是从model的subscriptions传来的*/}
        <h1>{this.props.title}</h1>
        <Child></Child>
        <h3>{this.props.myWifes}</h3>
        <p>{this.props.name}</p>
        <div>
          <button onClick={this.handleSetName.bind(this)}>setName</button>
        </div>
        <div>
          <button onClick={this.handleSetNameAsync}>setNameAsync</button>
        </div>
        <div>
          <button onClick={this.handleCnodeAsync}>cnodeAPI</button>
        </div>
        
      </div>
    )
  }
}
//作为参数传入connect去关联到model的东西
function mapStateToProps(state) {
  //state是model下面的东西
  // console.log(state);
  const {name,cnodeData,title} = state.productTest
  return {
   //这里定义的东西通过this.props拿到
   myWifes:'我的老婆们',
   name,
   cnodeData,
   title
  };
}
export default connect(mapStateToProps)(Products);