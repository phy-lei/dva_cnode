//import * as xxx from 'xxx'  会将 "xxx" 中所有 export 导出的内容组合成一个对象返回(或import * as obj from 'xx'  这种写法是把所有的输出包裹到obj对象里);
// import * as api from '../services/example'
import * as api from '../services/example'
export default {
    //命名空间
    namespace: 'mainTest',

    state: {
        navBar:['全部','精华','分享','问答','招聘','客户端测试'],
        listData:[],
    },

    //reducers需是个纯函数 修改state返回state 也可被effects用put调用
    reducers:{
        //effects.cnodeTest调用的
        setListData(state,payload){
            state.listData=payload.listData
            //必须return 解构的state 这函数才会执行
            return {...state}
        },
        tabChange(state,payload){
            state.listData=payload.listData
            return {...state}
        },
    },

    //副作用
    //payload 组件传过来的参数，可以理解为谁调用它谁传的参数 put去可以去调用reducers type action 
    //call 可以定义http请求  用于调用异步逻辑，支持 promise 
    effects:{
        //首页数据
        *cnodeTest(payload,{put,call}){
            //类似async await api接口传的参数在第二个参数里传
            let res =yield call(api.cnodeData)
            console.log(res.data.data);
            if(res.data){
                yield put({
                    type:"setListData",
                    listData:res.data.data
                })
            }  
        },
        //tab切换
        *tabChangeTest(payload,{put,call}){
            //类似async await api接口传的参数在第二个参数里传
            // console.log(payload.data);
            let result =yield call(api.cnodeData)
            if(result.data.data){
                let obj=payload.data //{good:true}
                let left=Object.keys(obj) //[good]
                console.log(left);
                let filterItem=result.data.data.filter((item)=>{
                    return item[left[0]]===obj[left]
                })
                yield put({
                    type:"tabChange",
                    listData:filterItem
                })
            }  
        },
      
    },

  


};
