// pages/theme/theme.js
//引入 model 做实例化
import Theme from './theme-model.js';
const theme  = new Theme();
Page({
  //  baseUrl:theme.baseUrl,
   newPro:[],
   topimg:'默认有图',
  onLoad(option){ 
    console.log("主题加载",option)
    wx.setNavigationBarTitle({
      title: option.themeName
    })
   this.initData();
  },
  initData(){
    theme.axios('get',`/getThemeById/`,{themeId: "th2"})
    .then((res)=>{
     let {newPro, topimg} = res.data;
      console.log(res)
      this.setData({newPro,topimg})
    })
  }
})