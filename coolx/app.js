//app.js  小程序生命周期
App({
    onLaunch (options) {
    // Do something initial when launch.
    console.log('初次启动');
  },
  onShow(options) {
    // Do something when show.
    console.log('显示进入前台'); 
  },
  onHide() {
    // Do something when hide.
    console.log('隐藏 进入后台');
  },
  onError(msg) {
    // console.log(msg)
  },
  globalData: 'I am global data'
}) 
