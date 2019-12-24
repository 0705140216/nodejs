<template>
  <el-dialog :close-on-click-modal="false" v-bind="$attrs" class="table-template-modle" @close="closeModel">
    <el-form
      ref="formData"
      v-loading="loading"
      :model="formData"
      :rules="formRules"
      :label-width="labelWidth"
      label-position="left"
    >
      <!--input-->
      <el-form-item prop="account" label="用户名">
        <el-input v-model.trim="formData.account" clearable placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="pwd" label="密码">
        <el-input v-model.trim="formData.pwd" clearable placeholder="请输入密码" />
      </el-form-item>

    </el-form>

    <span slot="footer">
      <el-button @click="closeModel">取 消</el-button>
      <el-button type="primary" :loading="btnLoading" :disabled="loading" @click="submitAction">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { showErrorMsg } from '@/libs/request'
import axios from 'axios'
export default {
  name: 'UpdateUser',
  props: {
    //  0 查看 1 编辑 2 添加
    status: {
      type: Number,
      default: 0
    },
    // 表单label宽度
    labelWidth: {
      type: String,
      default: '90px'
    },
    // 行数据
    row: {
      type: Object,
      default: () => {
        return {}
      }
    }

  },
  data() {
    return {
      loading: false,
      btnLoading: false,
      formData: {
        account: '',
        pwd: ''
      },
      formRules: {

      }
    }
  },
  created() {
    this.formData.account = this.row.account
    this.formData.pwd = this.row.pwd
  },
  methods: {
    // 关闭弹框
    closeModel() {
      this.$parent.modelOpts.visible = false
    },
    submitAction() {
      let that = this
      axios.post('/wxb/basic/user/update', {
        id: this.row.id,
        account: this.formData.account,
        pwd: this.formData.pwd
      }).then(({ data }) => {
        if (data.code == 200) {
          that.closeModel()
          that.$emit('on-submit-success')
          that.$message.success(data.message)
        } else {
          showErrorMsg(data.message)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
