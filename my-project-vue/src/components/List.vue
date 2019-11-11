<template>
  <div>
    <Head></Head>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="body" label="内容"></el-table-column>
    </el-table>
    <el-pagination style="text-align: center;margin-top: 40px;"
    background
    layout="prev, pager, next"
    :total="total"
    :page-size="pageSize"
    @current-change ="handleCurrentChange">
    </el-pagination>

  </div>
</template>

<script>
  import Head from './Head'
  export default {
    name: 'List',
    components: {
      Head
    },
    data() {
      return {
        message: [],
        total: 0, //数据的总量
        pageSize: 5, //每页显示多少条
        currentPage: 1, //当前页码数

      }
    },
    created() {
      this.$axios.get('./../../static/txt.json').then((res) => {
        console.log(res.data)
        this.message = res.data
        this.total = res.data.length
      })
    },
    methods: {
      handleCurrentChange(val) {
        console.log(`每页 ${val} 条`);
        this.currentPage=val
      },
    },
    computed: {
      tableData() {
        return this.message.slice((this.currentPage - 1) * this.pageSize,this.currentPage * this.pageSize)
      }

    }
  }
</script>

<style scoped="scoped">
</style>
