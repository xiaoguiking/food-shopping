// pages/sort/sort.js
import Sort from './sort-model.js'
const sort = new Sort();
Page({
      data: {
        navs: ['果味', '蔬菜', '炒货', '点心', '粗茶', '淡饭', ],
        sel: '果味',
        transform: 'move1',
        baseUrl: 'https://www.easy-mock.com/mock/5d0d90abef442814b038c8a9/example/sort',
        list: [],
      },

      selType(e) {
        let {
          index,
          type
        } = sort.getDataset(e);
        this.setData({
          sel: type,
          transform: 'move' + (index + 1)
        })
      },
      getDataByType(typeid) {
        wx.request({
              url: `https://www.easy-mock.com/mock/5d0d90abef442814b038c8a9/example/sort?type =${typeid}`, //仅为示例，并非真实的接口地址
              data: {},
              header: {
                'content-type': 'application/json' // 默认值
              },
              success(res) {
                console.log(res.data)
              }
            })
          },
          onLoad() {
            this.getDataByType(1);
          }
      })
    // {
    //   title: '果味',
    //     topImg: 'http://img4.imgtn.bdimg.com/it/u=2714831569,565764081&fm=26&gp=0.jpg',
    //       info: [{
    //         imgPath: 'http://img0.imgtn.bdimg.com/it/u=3187848281,3255175469&fm=26&gp=0.jpg',
    //         name: '天明'
    //       },
    //       {
    //         imgPath: 'http://img0.imgtn.bdimg.com/it/u=3187848281,3255175469&fm=26&gp=0.jpg',
    //         name: '不予'
    //       }
    //       ]
    // },
    // {
    //   title: '蔬菜',
    //     topImg: 'http://img4.imgtn.bdimg.com/it/u=2714831569,565764081&fm=26&gp=0.jpg',
    //       info: [{
    //         imgPath: 'http://img0.imgtn.bdimg.com/it/u=3187848281,3255175469&fm=26&gp=0.jpg',
    //         name: '秦时'
    //       },
    //       {
    //         imgPath: 'http://img0.imgtn.bdimg.com/it/u=3187848281,3255175469&fm=26&gp=0.jpg',
    //         name: '明月'
    //       }
    //       ]
    // },
    // {
    //   title: '潮货',
    //     topImg: 'http://img4.imgtn.bdimg.com/it/u=2714831569,565764081&fm=26&gp=0.jpg',
    //       info: [{
    //         imgPath: 'http://img0.imgtn.bdimg.com/it/u=3187848281,3255175469&fm=26&gp=0.jpg',
    //         name: '墨鸦'
    //       },
    //       {
    //         imgPath: 'http://img0.imgtn.bdimg.com/it/u=3187848281,3255175469&fm=26&gp=0.jpg',
    //         name: '莺歌'
    //       }
    //       ]
    // },