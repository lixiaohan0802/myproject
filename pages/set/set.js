Page({
  dara:{

  },
  zhuti_Event:function(){
    //弹窗
    wx.showModal({
      title: '提示',
      content: '敬请期待',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else {
          console.log('用户点击取消')
        }
      }
    })
  },
  view_Event:function(){
    wx.navigateTo({
      url:'../check/check'
    })
  },
  data_Event:function(){
    wx.navigateTo({
      url:'../check/check'
  })
  },
  actor_Event:function(){
    wx.navigateTo({
      url:'../actor/actor'
  })
  },
  question_Event:function(){
    wx.navigateTo({
      url:'../check/check'
  })
  },
})