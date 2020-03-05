//import * as xxx from 'xxx'  会将 "xxx" 中所有 export 导出的内容组合成一个对象返回(或import * as obj from 'xx'  这种写法是把所有的输出包裹到obj对象里);
// import * as api from '../services/example'
import * as api from '../services/example'
//引入路由的匹配规则
import { pathToRegexp} from 'path-to-regexp';
export default {
    //命名空间
    namespace: 'detailTest',

    state: {
        detailData:{}
    },

    //reducers需是个纯函数 修改state返回state 也可被effects用put调用
    reducers:{
        setDetai(state,payload){
            state.detailData=payload.detailData
            console.log(state);
            return {...state}
        }
    },

    //副作用
    //payload 组件传过来的参数，可以理解为谁调用它谁传的参数 put去可以去调用reducers type action 
    //call 可以定义http请求  用于调用异步逻辑，支持 promise 
    effects:{
      
        //详情页
        *detailHttp(payload,{put,call}){
            let result =yield call(api.getDetail,payload.id)
            if(result.data.data){
                yield put({
                    type:"setDetai",
                    detailData:result.data.data
                })
            }
        }
    },

    //异步数据初始化 用来做监听url的页面
    subscriptions:{
        detailPath({dispatch,history}){
            history.listen(({pathname})=>{
                // pathname:topic/id
                let path = pathToRegexp('/topic/:id').exec(pathname);
                // console.log(path);
                //如果路径有detail页
                if(pathname.includes('/topic')){
                    console.log('detail');
                    dispatch({
                        type:'detailHttp',
                        id:path[1]
                    })
                }
            })
        }        
    }


};
