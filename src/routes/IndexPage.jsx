import React from 'react'
import {connect} from 'dva'
import { List, Tag ,Menu} from 'antd';
//引入时间处理函数
import time from '../utils/time'
import './IndexPage.css'
class Indexpage extends React.Component {
    componentDidMount(){
        this.props.dispatch({
            type:'mainTest/cnodeTest'
        }) 
    }
    tabChange=(e)=>{
      let v=this.props.navBar[e.key];
      switch(v){
        case '全部':
          v={}
          break;
        case '精华':
          v={'good':true}
        break;  
        case '分享':
          v={'tab':'share'}
        break; 
        case '问答':
          v={'tab':'ask'}
        break;
        default:
          //将filter查找不到，返回空数组
          v={'a':1} 
      }
      // console.log(v);
      // 调用dva的effect
      this.props.dispatch({
        type:'mainTest/tabChangeTest',
        data:v
      })
    }
    toDetail(id){
      this.props.history.push(`/topic/${id}`)
    }
    render(){
      const {listData,navBar}=this.props
      return (
        <div className='home'>
           <List 
            size="large"
            header={
               <Menu mode='horizontal'  defaultSelectedKeys='0'  style={{ lineHeight: '30px' }} onClick={this.tabChange}>
                 {navBar.map((item,index)=>{
                   return (
                    <Menu.Item key={index}>
                      <span>{item}</span>
                    </Menu.Item>
                  )
                 })}
                </Menu>
           }
            bordered
            dataSource={listData}
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 10
            }}
            renderItem={item => 
            <List.Item>
              <div>
                <a href={item.author.loginname}>
                  <img className='bigImg' src={item.author.avatar_url} alt={item.author.loginname} />
                </a>
                <span className='space'>{item.reply_count}/{item.visit_count}</span>
                {item.top || item.good?
                  <Tag color='#87d068'>{item.top?'置顶':'精华'}</Tag>:
                  <Tag color='#e5e5e5'>{item.tab==='share'?'分享':'问答'}</Tag>
                }
                <span className='article' onClick={this.toDetail.bind(this,item.id)}>{item.title}</span>
              </div>
              <div>
                <img className='smallImg' src={item.author.avatar_url} alt={item.author.loginname} />
                <span style={{fontSize:'12px'}}>{time(item.create_at)}</span>
              </div>
            
            </List.Item>}
            />       
        </div>
      )
    }
}
//作为参数传入connect去关联到model的东西
function mapStateToProps(state) {
    //state是model下面的东西
    console.log(state);
    const {listData,navBar} = state.mainTest
    return {
    //  这里定义的东西通过this.props拿到
     listData,
     navBar
    };
  }
export default connect(mapStateToProps)(Indexpage)
