<template>
  <div class="home">
    <Head></Head>
 <h1>新闻总览</h1>
 <div class="new_box" v-for="item of list" :key="item.id">

   <router-link :to="'/single/'+item.id">
     <h3 v-changeColor:ita="{font:'24px'}"> {{item.id}}:{{item.title|upper}}
     </h3>
   </router-link>
   <article>{{item.body}}</article>
 </div>
   <el-button type="info" plain @click="MoreData" class="moreData">加载更多</el-button>

  </div>
</template>

<script>
  import Head from './Head'
export default {
  name: 'Home',
   components:{Head},
  data () {
    return {
    list:[],
    n:10,
    }
  },
  created() {
  this.$axios.get('static/txt.json').then((res)=>{
    console.log(res.data)
    this.list=res.data.slice(0,10)
  }).catch(()=>{
      this.$message({
              showClose: true,
              message: '数据丢失',
              type: 'error'
  })
  })
},
methods:{
  MoreData(){
    if(this.n<20){
      this.$axios.get('static/txt.json').then((res)=>{
        console.log(res.data)
       this.n+=10
       console.log(this.n)
        this.list=res.data.slice(0,this.n)
      })
    }else{
        this.$message({
                 message: '没有更多的内容',
                 center: true
               });


    }

  }
}
}
</script>
<style scoped="scoped">
h1{height: 80px;background: #888888;width: 100%;line-height: 80px;color: #fff;text-align: center;font-size: 36px;margin-bottom: 10px;}
.new_box{height: 100px;margin-bottom: 10px;background: #CACACA;text-align: center;}
h3{
  line-height: 50px;
  /* font-size: 24px;font-weight: 300; */
}
.moreData{margin: 10px auto;display: block;}
article{line-height: 24px;color: #555555;}
a{text-decoration: none;}
</style>
