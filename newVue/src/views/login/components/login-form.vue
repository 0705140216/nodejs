<template>
  <el-form ref="loginForm" :model="form" :rules="rules" class="login-form" @keydown.enter.native="handleSubmit">
    <el-form-item prop="account">
      <el-input v-model.trim="form.account" size="middle" clearable placeholder="请输入用户名">
        <i slot="prefix" class="icon iconfont iconuser" />
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model.trim="form.password" size="middle" :type="showPassword ? 'text' : 'password'" placeholder="请输入密码">
        <i slot="prefix" class="icon iconfont iconpassword" />
      </el-input>
      <span class="iconfont psd-eye" :class="showPassword ? 'iconeyeopen' : 'iconeyeclose'" @click="showPassword = !showPassword" />
    </el-form-item>
    <el-form-item prop="register" label="是否注册">
      <el-switch v-model="form.register" />
    </el-form-item>
    <!--    <el-form-item>-->
    <!--      <el-checkbox v-model="rememberPwd">记住密码</el-checkbox>-->
    <!--    </el-form-item>-->
    <el-form-item>
      <el-button type="primary" style="width:100%;margin-top:7%;" size="middle" :loading="loading" @click="handleSubmit">登 录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import Cookies from 'js-cookie'
import { Decrypt, Encrypt } from '@/libs/secret'

export default {
  name: 'LoginForm',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        account: '',
        password: '',
        register: false
      },
      rules: {
        account: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      },
      rememberPwd: false,
      showPassword: false
    }
  },
  computed: {},
  created() {
    this.getUserLocal()
    this.handleSubmit = this.$g.debounce(this.handleSubmit)
  },
  mounted() {
    this.showVerify && this.initGverify()
  },
  methods: {
    getUserLocal() {
      const localName = Cookies.get('admin-account')
      const localPwd = Cookies.get('admin-password')

      this.form.account = localName && Decrypt(localName)
      this.form.password = localPwd && Decrypt(localPwd)
      localPwd && (this.rememberPwd = true)
    },
    setUserInfoCookie() {
      Cookies.set('admin-account', Encrypt(this.form.account))
      this.rememberPwd
        ? Cookies.set('admin-password', Encrypt(this.form.password))
        : Cookies.set('admin-password', '', { expires: -1 })
    },
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$emit('on-success-valid', this.form)
          this.setUserInfoCookie()
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .login-form{
    .iconfont{
      font-size: 16px;
    }
    /deep/.el-input__inner{
      background: none;
      &:focus + span{
        color: $panGreen;
      }
    }
    /deep/.el-checkbox__label{
      color: #999;
    }
    /deep/.el-checkbox__input.is-checked + .el-checkbox__label{
      color: $panGreen;
    }
    /deep/.el-form-item.is-error .el-input__inner+ span,
    /deep/.el-form-item.is-error .el-input__inner:focus+ span{
      color: #ff4949;
    }
    /deep/.el-input__prefix{
      display: flex;
      align-items: center;
    }
    .psd-eye{
      position: absolute;
      right: 10px;
      top:0;
      display: flex;
      align-items: center;
      height: 100%;
      cursor: pointer;
      color: #DCDFE6;
      &:hover{
        color: $panGreen;
      }
    }
  }
</style>
