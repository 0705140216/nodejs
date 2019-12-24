// import wx from 'weixin-jsapi'
import wx from 'weixin-js-sdk'
import store from '@/store'

import { getJSSDK } from '_api/wechat'
// import { payorders } from '@/api/appointment/index'

const wxUtils = (jsUrl, isShare) => {
  return new Promise((resolve, reject) => {
    getJSSDK({ jsUrl }).then(res => {
      const { data } = res
      wx.config({
        debug: false, // TODO: 测试阶段使用
        appId: data.appid,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: [
          'getLocation',
          'updateAppMessageShareData',
          'updateTimelineShareData',
          'onMenuShareAppMessage',
          'onMenuShareTimeline',
          'scanQRCode',
          'hideAllNonBaseMenuItem',
          'hideMenuItems'
        ]
      })
      wx.ready(() => {
        resolve()
      })
      wx.error(res => {
        console.log('接口调取失败', JSON.stringify(res))
      })
    }).catch(error => {
      reject()
      console.log(error)
    })
  })
}

// 微信支付
const WXinvoke = (orderId, resolve, reject) => {
  // payorders({ orderId: orderId }).then(res => {
  //   if (typeof window.WeixinJSBridge == 'undefined') {
  //     if (document.addEventListener) {
  //       document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
  //     } else if (document.attachEvent) {
  //       document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
  //       document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
  //     }
  //   } else {
  //     onBridgeReady()
  //   }
  //   function onBridgeReady() {
  //     window.WeixinJSBridge.invoke(
  //       'getBrandWCPayRequest', {
  //         'appId': res.appId, // 公众号名称，由商户传入
  //         'timeStamp': res.timeStamp, // 时间戳，自1970年以来的秒数
  //         'nonceStr': res.nonceStr, // 随机串
  //         'package': res.package,
  //         'signType': res.signType, // 微信签名方式：
  //         'paySign': res.paySign // 微信签名
  //       },
  //       function(res) {
  //         setTimeout(function() {
  //           if (res.err_msg == 'get_brand_wcpay_request:ok') {
  //             resolve()
  //           } else {
  //             reject()
  //           }
  //         }, 500)
  //       })
  //   }
  // }).catch(error => {
  //   reject()
  // })
}

// 隐藏功能按钮
const hideItems = isShare => {
  if (isShare) {
    // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
    wx.hideMenuItems({
      menuList: [
        'menuItem:share:timeline', // 分享给朋友圈
        'menuItem:share:qq', // 分享到QQ
        'menuItem:share:weiboApp', // 分享到Weibo
        'menuItem:favorite', // 收藏
        'menuItem:share:facebook', // 分享到FB
        'menuItem:share:QZone', // 分享到 QQ 空间
        'menuItem:editTag', // 编辑标签
        'menuItem:delete', // 删除
        'menuItem:copyUrl', // 复制链接
        'menuItem:originPage', // 原网页
        'menuItem:readMode', // 阅读模式
        'menuItem:openWithQQBrowser', // 在QQ浏览器中打开
        'menuItem:openWithSafari', // 在Safari中打开
        'menuItem:share:email', // 邮件
        'menuItem:share:brand' // 一些特殊公众号
      ]
    })
  } else {
    // 隐藏所有非基础按钮接口   “基本类”按钮详见附录3
    wx.hideAllNonBaseMenuItem()
  }
}
// 获取地理位置
const getLocation = () => {
  return new Promise((resolve, reject) => {
    wx.getLocation({
      type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      success: response => {
        resolve(response)
      },
      fail: err => {
        console.log('获取位置失败', JSON.stringify(err))
      },
      cancel: err => {
        console.log('用户拒绝授权获取地理位置', err)
      }
    })
  })
}
// 使用微信内置地图查看位置接口
const openLocation = () => {
  return new Promise((resolve, reject) => {
    wx.openLocation({
      latitude: 0, // 纬度，浮点数，范围为90 ~ -90
      longitude: 0, // 经度，浮点数，范围为180 ~ -180。
      name: '', // 位置名
      address: '', // 地址详情说明
      scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
      infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转)
    })
  })
}
// 分享
const wxShare = () => {
  return new Promise((resolve, reject) => {
    let { title, desc, imgUrl } = store.state.wechat.shareInfo
    let link = window.location.href
    wx.updateAppMessageShareData({
      title, // 分享标题
      desc, // 分享描述
      link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl, // 分享图标
      success: function() {
        // 设置成功
      }
    })
    wx.updateTimelineShareData({
      title, // 分享标题
      desc, // 分享描述
      link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl, // 分享图标
      success: function() {
        // 设置成功
      }
    })
    wx.onMenuShareAppMessage({
      title, // 分享标题
      desc, // 分享描述
      link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl, // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function() {
        // 用户确认分享后执行的回调函数

      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
      }
    })
    wx.onMenuShareTimeline({
      title, // 分享标题
      link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl, // 分享图标
      success: function() {
        // 用户点击了分享后执行的回调函数
      }
    })
  })
}
// 扫码
const qrScan = (resolve, reject) => {
  wx.scanQRCode({
    needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
    scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
    success: response => {
      // 当needResult 为 1 时，扫码返回的结果
      resolve(response)
    },
    fail: err => {
      reject(err)
      console.log('请在微信环境下进行扫码操作！')
    }

  })
}
export { hideItems, getLocation, openLocation, WXinvoke, wxShare, qrScan }
export default wxUtils

