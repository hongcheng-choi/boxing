// pages/index/search.js
const app = getApp()
Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          active: 1
        })
      }
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
    items:[
      {
        // 导航名称
        text: '所有城市',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: 3,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        dot: true,
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '温州',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: true,
          },
          {
            text: '杭州',
            id: 2,
          },
        ],
      }, {
        // 导航名称
        text: '所有城市',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: 3,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        dot: true,
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '温州',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: true,
          },
          {
            text: '杭州',
            id: 2,
          },
        ],
      }, {
        // 导航名称
        text: '所有城市',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: 3,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        dot: true,
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '温州',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: true,
          },
          {
            text: '杭州',
            id: 2,
          },
        ],
      }, {
        // 导航名称
        text: '所有城市',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: 3,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        dot: true,
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '温州',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            
          },
          {
            text: '杭州',
            id: 2,
          },
        ],
      },
    ],
    mainActiveIndex: 0,
    activeId: null,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickNav({ detail = {} }) {
      this.setData({
        mainActiveIndex: detail.index || 0,
      });
    },
  
    onClickItem({ detail = {} }) {
      const activeId = this.data.activeId === detail.id ? null : detail.id;
  
      this.setData({ activeId });
    },
  }
})
