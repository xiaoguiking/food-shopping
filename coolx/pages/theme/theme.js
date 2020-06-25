// pages/theme/theme.js
//引入 model 做实例化
// import Theme from './theme-model.js'
// const theme  = new Theme()
Page({
  //  baseUrl:theme.baseUrl,
   products:[],
  //  topimg:'默认有图',
  onLoad(option){ 
    console.log("主题加载",option)
    wx.setNavigationBarTitle({
      title: option.themeName
    })
  //  this.initData();
  },
  // initData(){
  //   theme.axios('get','https://www.easy-mock.com/mock/5d0d90abef442814b038c8a9/example/buy',{themeid:2})
  //   .then(()=>{
  //     // console.log(res)
  //     this.setData({products:res.data.products})
  //   })
  // }
})