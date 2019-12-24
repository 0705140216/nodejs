<template>
  <div class="container">
    <h6>我是用户管理界面<el-button @click="$router.go(-1)">返回登录页</el-button></h6>
    <ul class="myul">
      <li v-for="(item,index) in list">
        <span>姓名:{{ item.account }}</span>
        <span>密码:{{ item.pwd }}</span>
        <span>创建时间:{{ item.create_time }}</span>
        <div>
          <el-button @click="del(item)">删除</el-button>
          <el-button @click="update(item)">修改</el-button>
        </div>
      </li>
    </ul>
    <update-user v-if="modelOpts.visible" v-bind="modelOpts" @on-submit-success="getList" />
  </div>
</template>

<script>
import axios from 'axios'
import { showErrorMsg } from '@/libs/request'
import UpdateUser from './update-user'
export default {
  name: 'Index',
  components: {
    UpdateUser
  },
  data() {
    return {
      list: [],
      modelOpts: {
        visible: false,
        status: 0, // 弹框状态  // 0 查看 1 编辑 2 添加
        labelWidth: '90px',
        row: {}, // 携带数据
        title: '',
        width: '30%',
        model: true,
        top: '15vh'
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    del({ id }) {
      let that = this
      axios.get('/wxb/basic/user/del', {
        params: {
          id
        }
      }).then(({ data }) => {
        console.log(data)
        if (data.code == 200) {
          this.getList()
          that.$message.success(data.message)
        } else {
          showErrorMsg(data.message)
        }
      })
    },
    update({ id, account, pwd }) {
      const setModel = (t, i) => {
        this.modelOpts.title = t
        this.modelOpts.visible = i
      }
      this.modelOpts.row = {
        id,
        account,
        pwd
      }
      setModel(`修改${account}`, true)
    },
    getList() {
      let that = this
      axios.get('/wxb/basic/user/list')
        .then(function({ data }) {
          if (data.code == 200) {
            that.list = data.data
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
</script>

<style scoped lang="scss">
.container{
  h6{
    font-size: 20px;
    line-height: 40px;
    text-align: center;
  }
  .myul{
    width: 600px;
    margin: auto;
    li{
      width: 100%;
    display: flex;
      align-items: center;
      padding: 5px;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
