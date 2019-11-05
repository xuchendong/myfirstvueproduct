<template>
<div class="users">
    <el-table
      :data="userlist"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="邮箱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="date"
        label="用户状态"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="操作"
        width="180">
      </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
  data () {
    return {
      userlist: [],
      query: '',
      pagenum: 1,
      pagesize: 2
    }
  }
}
</script>

<style>

</style>
