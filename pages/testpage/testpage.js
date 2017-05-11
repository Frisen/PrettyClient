// pages/logs/logs.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  click:function(){
    wx.request({
      url: 'https://localhost:44322/WebService1.asmx/GetProduct',
      data: {request:'helo'
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       header: {
         'content-type': 'application/x-www-form-urlencoded'
       }, // 设置请求的 header
      success: function(res){
        // success
        console.log(res)
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  }
})