// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    info: 'Hello World',
    imgSrc: 'http://www.itheima.com/images/logo.png',
    randomNum1: Math.random() * 10,
    randomNum2: Math.random().toFixed(2),
    count: 0,
    msg: '你好',
    block: false,
    arr1: ['苹果','小米','华为']
  },
  btnTapHandle(e) {
    console.log(e.target);
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() { },
  CountChange() {
    this.setData({
      count: this.data.count + 1
    })
  },
  btnTap2(e) {
    this.setData({
      count: this.data.count + e.target.dataset.info 
    })
  },
  inputHandler(e) {
    this.setData({
      msg: e.detail.value
    })
  }

})
