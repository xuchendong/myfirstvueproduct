<template>
<div class="home">
    <el-container>
  <el-header>
      <div class="logo"></div>
      <div class="title"><h1>电商后台管理系统</h1></div>
      <div class="logout">欢迎您，xxx  <a href="javascript:;" @click="logout">退出</a></div>
  </el-header>
  <el-container>
    <el-aside width="200px">
 <el-menu
      :default-active="activemenu"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router>
      <el-submenu :index="menuitem.path" v-for="menuitem in menulist" :key="menuitem.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{menuitem.authName}}</span>
        </template>
        <el-menu-item :index="subitem.path" v-for="subitem in menuitem.children" :key="subitem.id"> <i class="el-icon-menu"></i>{{subitem.authName}}</el-menu-item>
    </el-submenu>

    </el-menu>
    </el-aside>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>
</div>
</template>

<style lang="less" scoped>
.el-submenu {
  width: 200px;
}
.home {
    height: 100%;
    .el-container {
    height: 100%;

    .el-header {
        display: flex;
        background-color: #b3c1cd;
        .logo {
            width: 180px;
            background: url('../assets/logo.png') no-repeat center center;
            background-size: contain;
            height: 60px;

        }
        .logout {
            width: 180px;
            line-height: 60px;
            text-align: right;
            font-weight: bold;
        }
        .title {
            flex: 1;
            text-align: center;
            line-height: 60px;
            color: #fff;
        }

    }
    .el-container {
        .el-aside {
            background-color: #545c64;
        }
        .el-main {
            background-color: #eaeef1;
        }
    }
}
}

</style>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      menulist: []
    }
  },
  created () {
    this.$axios({
      url: 'menus',
      method: 'get'
      // headers: {
      //   Authorization: localStorage.getItem('token')
      // }
    }).then(res => {
      const { data, meta } = res
      if (meta.status === 200) {
        this.menulist = data
        console.log(res)
      }
    })
  },
  methods: {
    logout () {
      this.$confirm('确定退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('token')
        this.$router.push('/login')
        this.$message.success('退出成功')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    }
  },
  computed: {
    activemenu () {
      return this.$route.path.slice(1)
    }
  }
}
</script>
