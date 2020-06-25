import Config from './config.js'
// 封装数据请求
class Base {
  constructor() {
    this.baseUrl = Config.baseUrl
  }
  // 测试使用
  log(){
    console.log('测试方法')
  }
  //将wx提供的请求模块做了二次封装
  axios(method, url, data) {
    console.log(this)
    return new Promise((resolve, reject) => {
      wx.request({
        method: method || 'GET',
        url: this.baseUrl + url,
        data: data || {},
        success(res) {
          if (res.statusCode === 200) {
            resolve(res.data)
          } else {
            reject(res)
          }

        },
        fail(err) {
          reject(err)
        }
      })

    })
  }
  // 获取事件参数封装
  getDataset(e, key) {
    if (!key) {
      return e.currentTarget.dataset
    } else {
      return e.currentTarget.dataset[key]
    }

  }
}
//公有的方法
export default Base 