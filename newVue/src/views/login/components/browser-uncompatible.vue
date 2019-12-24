<template>
  <div class="brower-tip">
    <div class="tips-wrapper">
      <div class="tips">检测到您当前浏览器版本过低，请使用最新版本谷歌浏览器或者IE浏览器！</div>
      <div class="broswer">谷歌浏览器下载：<a class="download" href="https://www.google.cn/chrome/" target="_blank">点击官网下载</a>（推荐）</div><br>
      <div class="broswer">IE浏览器下载：<a class="download" href="https://support.microsoft.com/zh-cn/help/18520/download-internet-explorer-11-offline-installer" target="_blank">点击官网下载</a>（不推荐）</div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'BrowserUncompatible',
  props: {},
  data() {
    return {
    }
  },
  computed: {},
  created() {},
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.brower-tip{
  @include fxied-absolute;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 20px;
  line-height: 30px;
  background-color: rgba($color: #fff, $alpha: 0.8);

.tips-wrapper{
  @include fxied-center;
  text-align: center;
}
.tips{
  font-weight: bold;
  line-height: 50px;
  font-size: 24px;
  color: #000;
  padding-bottom: 50px;
}
.broswer{
  font-size: 18px;
  color:#000;
.download{
    color:$panGreen;
  }
}

}
</style>

