//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: { "i": 2, "j": 3 },
    swiper: [],
    response: {},
    addorcancel: '../../pictures/add.png'
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  upLoadPic: function (event) {
    var that = this
    //上传照片
    if (getApp().globalData.isadd == '1') {
      that.setData(
        {
          addorcancel: '../../pictures/cancel.png'
        }
      )
      getApp().globalData.isadd = '0'
      wx.chooseImage({
        success: function (res) {
          var imgSrc = res.tempFilePaths[0]
          wx.uploadFile({
            //url: 'https://localhost:44322/WebService1.asmx/GetProduct', //仅为示例，非真实的接口地址
            url: 'https://www.zhangxinshuai.cn/upload/WebService1.asmx/GetProduct', //仅为示例，非真实的接口地址
            filePath: imgSrc,
            name: 'data',
            formData: {
            },
            success: function (res) {
              console.log(res)
              wx.showModal({
                title: '提示',
                content: res.data,
                success: function (res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
              //do something
            },
            fail: function (e) {
              console.log("怎么老是走失败", e)
              // console.log(tempFilePaths[0])
            }
          })
        }
      })
    } else {
      that.setData(
        {
          addorcancel: '../../pictures/add.png'
        }
      )
      getApp().globalData.isadd = '1'
    }

  }
})
