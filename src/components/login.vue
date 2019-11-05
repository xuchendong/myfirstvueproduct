<template>
<div class="login"><el-form ref="form" :model="form" label-width="80px"  :rules="rules" status-icon >
  <img src="../assets/1.jpg" alt="">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
  </el-form-item>
   <el-form-item label="密码" prop="password">
    <el-input v-model="form.password" placeholder="请输入nide 密码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button @click="reset">重置</el-button>
  </el-form-item>
</el-form></div>
</template>

<script>
// import axios from 'axios'

export default {
  data () {
    return {
      form: {
        username: '',
        password: ''

      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: ['blur', 'change'] },
          { min: 3, max: 9, message: '长度在 3 到 9 个字符', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: ['blur', 'change'] },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    reset () {
      this.$refs.form.resetFields()
    },
    login () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$axios({
            url: `/login`,
            method: 'post',
            data: this.form
          }).then(res => {
            console.log(res)
            if (res.meta.status === 200) {
              localStorage.setItem('token', res.data.token)
              // console.log(res.data.data.token)
              this.$router.push('/home')
              this.$message.success('登录成功')
            } else {
              this.$message.error(res.meta.msg)
            }
          })
        } else {
          return false
        }
      })
    }

  }

}
</script>

<style lang="less">
.login {
  background-color:#2d434c;
  height: 100%;
  overflow: hidden;
  .el-form {
    background-color: #fff;
    width: 400px;
    margin: 200px auto;
    padding-top: 30px;
    padding-bottom: 10px;
    padding-right: 20px;
    border-radius: 20px;
    position: relative;
    img {
      width: 70px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -75px;
      border-radius: 50%;
      border: 10px solid #fff;

    }
    .el-button:last-child {
      margin-left: 80px;
    }

  }
}
</style>
