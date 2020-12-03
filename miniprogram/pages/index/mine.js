// pages/index/mine.js
Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          active: 3
        })
      }
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                this.setData({
                  avatarUrl: res.userInfo.avatarUrl,
                  userInfo: res.userInfo
                })
              }
            })
          }
        }
      })
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "avatarUrl":"",
    "userInfo":{},
    "mineTab":[{
      "text":"消息",
      "id":"1",
    },{
      "text":"商家空间",
      "id":"2",
    },{
      "text":"消息",
      "id":"3",
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    callMe(){
      wx.makePhoneCall({
        phoneNumber: '13480847755' //仅为示例，并非真实的电话号码
      })
    }
  }
})
