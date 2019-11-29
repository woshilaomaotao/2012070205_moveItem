/*
* ajax 请求模块
* promise 返回的是 response.data
* */

import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
  return new Pomise(function (resolve, reject) {
    //执行异步ajax请求
    let promise;
    if (type == 'GET') {
      let dataStr = '';
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      });
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data);
    }
    // 成功了调用 resolve 失败了调用 reject
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}
