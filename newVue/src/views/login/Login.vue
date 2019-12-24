<template>
  <div class="login">
    <div class="login-con">
      <!--      <div class="login-left">-->
      <!--        <img src="../../assets/images/login-title.png" alt="">-->
      <!--      </div>-->
      <el-card icon="log-in">
        <div slot="header">
          <span>欢迎各位前端大佬升级版</span>
        </div>
        <div class="form-con">
          <div v-if="errorInfo" class="login-error-tips">
            <i class="el-icon-error" />
            {{ errorInfo }}
          </div>
          <login-form :loading="loading" @on-success-valid="handleLogin" />
        </div>
      </el-card>
    </div>

    <!-- 浏览器不兼容提示 -->
    <browser-uncompatible v-if="versionLower" />
  </div>
</template>

<script>
import LoginForm from './components/login-form'
import BrowserUncompatible from './components/browser-uncompatible'
import { IEVersion, chromeVersion } from '@/libs/tools'
import axios from 'axios'
import { showErrorMsg } from '@/libs/request'
export default {
  components: {
    LoginForm,
    BrowserUncompatible
  },
  data() {
    return {
      loading: false,
      errorInfo: ''
    }
  },
  computed: {
    versionLower() {
      let chrome = chromeVersion()
      let ie = IEVersion()

      if (chrome) {
        return chrome < 60
      } else if (ie) {
        return !['edge', 11].includes(ie)
      } else {
        return false
      }
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        if (route.query) {
          this.redirect = route.query.redirect
          this.query = route.query
          delete this.query['redirect']
        }
      },
      immediate: true
    }
  },
  methods: {
    async handleLogin({ account, password, register }) {
      let that = this
      if (!register) { // 登录
        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
        axios({
          method: 'post',
          url: 'wxb/auth/login/login',
          data: {
            account,
            pwd: password
          }
        })
          .then(function({ data }) {
            console.log(data)
            if (data.code == 200) {
              that.$message.success('登陆成功')
              that.$router.push({ path: '/' })
            } else {
              showErrorMsg(data.message)
            }
          })
          .catch(function(error) {
            console.log(error)
          })
      } else { // 注册
        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
        axios({
          method: 'post',
          url: 'wxb/basic/user/add',
          data: {
            account,
            pwd: password
          }
        })
          .then(function({ data }) {
            console.log(data)
            if (data.code == 200) {
              that.$message.success('注册成功')
              that.$router.push({ path: '/' })
            } else {
              showErrorMsg(data.message)
            }
          })
          .catch(function(error) {
            console.log(error)
          })
      }
    }
  }
}
</script>

<style lang="scss">
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../../assets/images/login-bg.jpg) no-repeat center center;
  background-size: cover;
  overflow: hidden;

  &-con {
    width: 464px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    overflow: hidden;

    .login-error-tips{
      position: absolute;
      top: -18px;
      left: 0;
      color: $red;
      @include text-overflow;
      max-width: 300px;
    }

    .login-left{
      width:100%;
      background: rgba(255,255,255,.75);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: m-slideInRight .5s ease-out both .2s;
      overflow: hidden;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      img{
        width: 67%;
        animation: m-slideInRight .5s cubic-bezier(0, 0, 0.25, 1.27) both .3s;
      }
    }

    &-header {
        font-size: 16px;
        font-weight: 300;
        text-align: center;
        padding: 30px 0;
    }
    .el-card {
      width: 100%;
      border: none;
      padding-top: 5%;
      padding-bottom: 5%;
      animation: m-fadeIn .35s ease-out both;
      position: relative;
      z-index: 2;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;

      &.is-always-shadow{
        box-shadow: none;
      }

      .el-card__header {
        color: #333;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        line-height: 50px;
        border: none;
        margin-bottom: 10px;

        span:after {
          content: '';
          display: block;
          margin: 0 auto;
          width: 140px;
          height: 3px;
          background: rgba(1, 161, 172, 1);
          border-radius: 3px;
        }
      }

      .el-card__body{
        padding: 20px 80px;
      }

      .form-con {
        padding: 10px 0 0;
        position:relative;
        .el-input{
          width: 100%;
        }
      }
    }
  }
}
  @keyframes m-slideInRight {
    from{
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      opacity: .5;
    }
  }
  @keyframes m-fadeIn {
    from{
      opacity: .5;
    }
  }
</style>
