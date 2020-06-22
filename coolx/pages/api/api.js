// pages/api/api.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qrcode: '',
    avatarUrl:''
  },
  markers: [{
    iconPath: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604723666,4055196070&fm=26&gp=0.jpg",
    id: 0,
    latitude: 23.099994,
    longitude: 113.324520,
    width: 50,
    height: 50
  }],
  onLoad() {
    // 数据缓存
    wx.setStorageSync('nameInfo', {name:'林天', value:'123'}),
    wx.setStorageSync('nameInfo1', {name:'天', value:'12323'}),
    console.log(wx.getStorageInfoSync('nameInfo')),
    this.getNet()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  // 允许从相机和相册扫码
  // let that =this  第一种方法
  scanCode() {
    wx.scanCode({
      success: (res) => {
        console.log(res)
        this.setData({
          qrcode: res.result
        })
      }
    })
  },
  // 网络变化
  getNet() {
    wx.onNetworkStatusChange((data) => {
      console.log(data)
      let types = ['2g', '3g', '4g']
      if (types.indexOf(data.networkType) !== -1) {
        wx.showModal({
          title: '网络切换',
          content: '当前网络不是wifi环境是否继续播放',
          success(res) {
            console.log(res)
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })

      }

    })
  },
  //显示
  loading() {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function() {
      wx.hideLoading()
    }, 2000)

  },
  show() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  //拨打电话
  call(){
    wx.makePhoneCall({
      phoneNumber: '17888842074' //仅为示例，并非真实的电话号码
    })
  },

  //播放音乐
  music(){
    wx.playBackgroundAudio({
      dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',
      title: '信仰之光',
      coverImgUrl: ''
    })
  },
  // 录音
  luyin(){
    wx.startRecord({
      success(res) {
        const tempFilePath = res.tempFilePath
        console.log('停止录音', res);
      },
    })
  },
  
   // 停止录音
    stop(){
      wx.stopRecord()
    },
    // 播放录音
    play(){
      wx.playVoice({
        filePath: 'http://tmp/wxf2aa773e4d1b9082.o6zAJs9TTKWkpbYRRfiE…F3VAZo0uuxkAff3e9d1981ef143fe2473583e4f89631.silk',
      
      })
    },
   
  // 登录
  getUserInfo(){
   
     wx.getUserInfo({
       success: (res)=> {
         var userInfo = res.userInfo
         var nickName = userInfo.nickName
         var avatarUrl = userInfo.avatarUrl
         var gender = userInfo.gender //性别 0：未知、1：男、2：女
         var province = userInfo.province
         var city = userInfo.city
         var country = userInfo.country
         this.setData({ avator: res.userInfo.avatarUrl})
         console.log(res)
       }
     })
   },
   // 地图
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
// 





})