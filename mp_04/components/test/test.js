// components/test/test.js
Component({
  options: {
    styleIsolation: 'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    max: {
      type: Number,
      value: 10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount() {
      if (this.data.count >= this.properties.max) return
      this.setData({
        count: this.data.count + 1,
        max: this.properties.max + 2
      })
      this._shouCount()
    },
    _shouCount() {
      wx.showToast({
        title: 'count值为' + this.data.count,
        icon: 'none'
      })
    },
    showInfo() {
      console.log(this.data);
      console.log(this.properties);
      console.log(this.data == this.properties);
    }
  }
})
