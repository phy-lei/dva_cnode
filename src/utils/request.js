import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}


/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, params, options) {
  if (params) {
    let paramsArray = [];
    //拼接参数
    if (typeof params === Object) {
      Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&')
      } else {
        url += '&' + paramsArray.join('&')
      }
    }else{
      url += '/' + params
    }

  }
  return fetch(url, {
      ...options
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({
      data
    }))
    .catch(err => ({
      err
    }));
}
