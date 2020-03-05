import * as api from '../services/example'
export default {
    //命名空间
    namespace: 'productTest',

    state: {
        name: 'kiana',
        cnodeData:[],
        title:''
    },

    //reducers需是个纯函数 修改state返回state 也可被effects用put调用
    reducers:{
        //参数state是上面的state payload是组件传过来的参数
        setName(state,payload){
            state.name=payload.data.name
            //必须return 解构的state 这函数才会执行
            return {...state}
        },
        //effects.cnodeTest调用的
        setCnodeData(state,payload){
            state.cnodeData=payload.cnodeData
            //必须return 解构的state 这函数才会执行
            return {...state}
        },
        //subscriptions调用的
        setTitle(state,payload){
            state.title=payload.title
            console.log(state);
            return {...state}
        }
    },

    //副作用
    effects:{
        //payload 组件传过来的参数，可以理解为谁调用它谁传的参数 put去可以去调用reducers type action 
        //call 可以定义http请求  用于调用异步逻辑，支持 promise 
        *setNameAsync(payload,{put,call}){
            // console.log("run");
            console.log(payload,"payload");
            yield put({
                type:"setName",
                data:{
                    name:"kiana"
                }
            })
        },
        *cnodeTest(payload,{put,call}){
            //类似async await api接口传的参数在第二个参数里传
            let res =yield call(api.cnodeData,{
                'page' : 1,
                'limit': 1
            })
            
            console.log(res.data.data);
            if(res.data){
                yield put({
                    type:"setCnodeData",
                    cnodeData:res.data.data
                })
            }
            
        }
    },

    //异步数据初始化 用来做监听url的页面
    subscriptions:{
        testPath({dispatch,history}){
            history.listen(({pathname})=>{
                if(pathname==='/product'){
                    console.log('product页');
                    dispatch({
                        type:'setTitle',
                        title:'product页'
                    })
                }
            })
        }   
    }


};
