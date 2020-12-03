// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "active":0,
    "list":[{
      "icon":"home-o",
      "text":"首页",
      "path":"/pages/index/home"
    },{
      "icon":"search",
      "text":"搜索",
      "path":"/pages/index/search"
    },{
      "icon":"orders-o",
      "text":"订单",
      "path":"/pages/index/order"
    },{
      "icon":"user-circle-o",
      "text":"我的",
      "path":"/pages/index/mine"
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event){
      const index = event.detail;
      const url = this.data.list[index].path;
      wx.switchTab({url})
      this.setData({ active: index });
    }
  }
})
