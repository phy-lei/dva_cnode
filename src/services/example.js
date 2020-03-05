import request from '../utils/request';
const cnode = "/apis"

export function query() {
  return request('/api/users');
}

//注册cnode接口 get /topics 主题首页
export function cnodeData(params) {
  let options = {
    method: "GET", //请求方法
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }
  let url=cnode + '/api/v1/topics'
  return request(url,params,options);
}

//get /topic/:id 主题详情
export function getDetail(params) {
  let options = {
    method: "GET", //请求方法
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }
  let url=cnode + '/api/v1/topic'
  return request(url,params,options);
}

//注册mock接口
export function mockdata() {
  let url='api/mockdata'
  return request(url);
}
