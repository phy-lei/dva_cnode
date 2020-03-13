import React from 'react';
import {connect} from "dva"
class Detail extends React.Component{
    constructor(){
        super();
        this.detail = React.createRef();
    }
    //使用这种方式来写入innerHTML
    createMarkup() {
      return {__html: this.props.detailData.content};
    }
    componentDidUpdate(){
        //测试生命周期与dva传值的顺序
        // console.log(this.detail.current.innerHTML);
        // console.log(this.props);
      // this.detail.current.innerHTML=this.props.detailData.content
    }
  render(){
      console.log(this.props.detailData);
    return (
      <div className="detail" ref={this.detail} dangerouslySetInnerHTML={this.createMarkup()}>
          
      </div>
    );
  }
  
}
//作为参数传入connect去关联到model的东西
function mapStateToProps(state) {
    //state是model下面的东西
    // console.log(state);
    const {detailData} = state.detailTest
    return {
        detailData
    };
}


export default connect(mapStateToProps)(Detail)
