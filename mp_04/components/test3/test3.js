// components/test3/test3.js
Component({
  options: {
    pureDataPattern: /^_/
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
    _rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0,0,0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeR() {
      this.setData({
        '_rgb.r': this.data._rgb.r + 10 > 255 ? 255 : this.data._rgb.r + 10
      })
    },
    changeG() {
      this.setData({
        '_rgb.g': this.data._rgb.g + 10 > 255 ? 255 : this.data._rgb.g + 10
      })
    },
    changeB() {
      this.setData({
        '_rgb.b': this.data._rgb.b + 10 > 255 ? 255 : this.data._rgb.b + 10
      })
    },
    _randomColor() {
      this.setData({
        _rgb: {
          r: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          b: Math.floor(Math.random() * 256),
        }
      })
    }
  },
  observers: {
    '_rgb.**': function (obj) {
      this.setData({
        fullColor: `${obj.r},${obj.g},${obj.b}`
      })
    }
  },
  lifetimes: {
    created() {
      console.log('created');
    },
    attached() {
      console.log('attached');
    },
  },
  pageLifetimes: {
    show: function () {
      this._randomColor()
    },
    hide() { },
    resize() { }
  }
})
