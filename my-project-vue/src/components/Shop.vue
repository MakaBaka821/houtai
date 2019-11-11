<template>
  <div>
    <Head></Head>

    <el-table :data="message" style="width: 100% ;">
      <el-table-column type="index">
      </el-table-column>

      <el-table-column prop="brand" label="名称">
      </el-table-column>
      <el-table-column  label="图例">
        <template slot-scope="scope">
          <img :src="scope.row.src">
        </template>
      </el-table-column>
      <el-table-column prop="single" label="型号">
      </el-table-column>
      <el-table-column prop="price" label="价格">
      </el-table-column>
      <el-table-column prop="num" label="选取">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.num" @change="handleChange" :min="0" label="描述文字"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="小计">
        <template slot-scope="scope"> {{scope.row.num*scope.row.price}}</template>
      </el-table-column>
    </el-table>
    <p>总价：{{pay}}元</p>
    <!-- <template>
  <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
</template> -->

  </div>
</template>

<script>
  import Head from './Head'
  export default {
    name: 'Shop',
    components: {
      Head
    },
    data() {
      return {
        message:[]
      }
    },
    created() {
      this.$axios.get('./../../static/shop.json').then((res) => {
        this.message=res.data
      })
    },
    methods: {
      handleChange(row) {
    
      }
    },
    computed: {
      pay() {
        return this.message.map((value, index) => {
          return value.num * value.price;
        }).reduce((x, y) => {
          return x + y
        }, 0)
      }
    }
  }
</script>

<style scoped="scoped">
  p {
    text-align: right;
    margin: 10px 20px;
  }

 tbody {
    text-align: center !important;
  }
  img{width: 60px;height: 40px;}
</style>
