// pages/shopping/shopping.js
// 引入modal层
import Shopping from './shopping-model';
const shopping = new Shopping();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "购物车",
    // imgUrls: [
    //   '/images/banner-1a.png',
    //   '/images/banner-2a.png',
    //   '/images/banner-3a.png',
    //   '/images/banner-4a.png',
    //  ],
     indicatorDots: false,
     autoplay: true,
     interval: 3000,
     duration: 1000,
     banners: [],
     newPro: [],
     theme: [],
  },
  handleName(e){
    // 事件对象
    // 传参方式  data-， 通过在标签上 ： data-名字='数据'
    this.setData({name: '新名字： 购物车1'})
    console.log(e, '点击我')
    // 调用基类方法 
    console.log(shopping.log());
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.initData();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  console.log('成功下拉刷新');
  // setTimeout(() => {
  //     console.log('数据请求成功');
  // }, 1500)
    //  wx.request({ 
    //    url: 'http://localhost:3000/api/gethome',
    //    method:'GET',
    //    data:{
    //    },
    //    success(res){
    //      console.log(res.data)
    //    }
    //  })
    // 公共请求

  wx.stopPullDownRefresh();
    shopping.axios(
      'GET', 
      '/car/list',
      {}
    ).then(res => {
      console.log(res);
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面上拉触底事件');

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


  // 自定义方法
  initData(){
    shopping.axios(
      'get', 
      '/car/list'
    ).then(res => {
      let {    
         banners,
         newPro,
        theme
    } = res.data;
    console.log(res.data, 'data');
        this.setData({
          banners,
          newPro,
          theme})
      wx.hideLoading()
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 1000)
  },


  // 获取id方法封装
  getDataId(e, key){
    if(!key){
      return e.currentTarget.dataset
    } else {
      return e.currentTarget.dataset.theme
  }
},
  
  // 主题theme
  goTheme(e){
  //  let id = this.getDataId(e, 'theme');
  let {themeid, themename} = this.getDataId(e);
   console.log(themeid,themename);
   wx.navigateTo({
     url: `/pages/theme/theme?themeId=${themeid}&&themeName=${themename}`,
   })
  },
    // 跳转详情页
    goDetail(e){
      let id = shopping.getDataset(e, 'id');
      console.log(id, '12');
      wx.navigateTo({
        url: '/pages/detail/detail',
      })
    }
})