Page({
  data: {
      currentCity:"xx",
      currentTem:"yy",
      arr:[],
      currentWin:"",
      currentSpeed:"",
      currentAir:"",
      currentTem1:"",
      currentTem2:"",
      currentTip:""
  },
find_Event:function(event){
  var v1 = event.detail.value;
  this.setData({
    findText:v1
  })
},
click_Event:function(){
  //console.log(this.data.findText);
  var v2 = this.data.findText;
  if(this.data.findText.length == 0){
    wx.showToast({
        title: '请输入城市',
        icon:'none'
      })
      return;
  }
  var _this = this;
  this.get_Data(v2,function(res){
    //console.log(res);
    _this.setData({
      currentCity:res.data.city,
      currentTem:res.data.tem,
        currentWin:res.data.win,
        currentSpeed:res.data.win_speed,
        currentAir:res.data.air_level,
        currentTem1:res.data.tem1,
        currentTem2:res.data.tem2,
        currentWea:res.data.wea,
        todaySunrise:res.data.sunrise,
        todaySunset:res.data.sunset,
        currentTip:res.data.air_tips,
      arr:res.data.hours
    })
  })
  },
  get_Data:function(cityName,callback){
    wx.request({
      url: 'https://yiketianqi.com/api?version=v62&appid=85784566&appsecret=9ejWYl7C',
      data:{
        city:cityName
      },
      success:function(res){
        if(callback)callback(res);
      }
    })
  },
  onLoad:function(){    
    var _this = this ;
    this.get_Data("广州",function(res){  
      //console.log(res);
      _this.setData({
        currentCity:res.data.city,
        currentTem:res.data.tem,
        currentWin:res.data.win,
        currentSpeed:res.data.win_speed,
        currentAir:res.data.air_level,
        currentTem1:res.data.tem1,
        currentTem2:res.data.tem2,
        currentWea:res.data.wea,
        todaySunrise:res.data.sunrise,
        todaySunset:res.data.sunset,
        currentTip:res.data.air_tips,
        arr:res.data.hours
      })
    })
  }
})