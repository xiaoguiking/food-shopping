//index.js
//获取应用实例

import Index from './index-model.js'
const index = new Index();
const app = getApp()
Page({
  /*********内置方法******** */
  data: {
    banners: [],
    themes: [],
    products: [],
    // baseUrl: index.baseUrl(),
    demo:{
         name: 16
    },
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
    /*
    
 
       imgUrls: [
      '/images/banner-1a.png',
      '/images/banner-2a.png',
      '/images/banner-3a.png',
      '/images/banner-4a.png',
     ],
    */

  },
  changeName(e) {
    //  e 事件对象  传参方式 通过在标签上 data-名字 = '数据'
    console.log('点击到了')
  },
  onLoad: function(options) {
    // Do some initialize when page load.
    this.initData();
    console.log('页面重载');

  },
  /********  自定义方法 */

  initData() {
    wx.showLoading({
      title: '加载中',
    })
    index.axios('get', '/index/list')
      .then((res) => {
        console.log(res);
        let {
          baners,
          themes,
          products,
        } = res.data;
        this.setData(res.data)
        wx.hideLoading();
      })
  },

  onPullDownRefresh() {
    console.log('下拉刷新')
    index.axios(
        'GET', 'https://www.easy-mock.com/mock/5d0d90abef442814b038c8a9/example/buy', {})
      .then((res) => {
        console.log(res)
      })

    /*
     wx.request({ 
       url: 'http://localhost:3000/api/gethome',
       method:'GET',
       data:{
       },
       success(res){
         console.log(res.data)
       }
     })
  */
    wx.stopPullDownRefresh()
  },
  goTheme(e) {
    // console.log(e.currentTarget.dataset.themeid)
    // let id = index.getDataset(e,'themeid')
    let {themeid,themename} = index.getDataset(e)
     wx.navigateTo({
       url:`/pages/theme/theme?themeid =${themeid}&themename=${themename}`
     })
    // console.log(themename) 此处不能有空格
  }
})