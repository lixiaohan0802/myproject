Page({
  data: {
   
  },
  pay_Event:function(){
    wx.showModal({
      title: '赞赏',
      content: '敬请期待',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else {
          console.log('用户点击取消')
        }
      }
    })
  }
})