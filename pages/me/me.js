Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    // 查看是否授权
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo (e) {
    //console.log(e.detail.userInfo)
  },
  check_Event:function(){
    wx.navigateTo({
      url:'../check/check'  //跳转页面的路径，可带参数？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀     //成功后的回调；
  })
  }
})