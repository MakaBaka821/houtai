<template>
  <div>
  <h1>详情信息</h1>
  <Mapp>111</Mapp>
  <div class="single_box">
    <h3>{{message.title}}</h3>
    <article>{{message.body}}</article>
  </div>

  </div>
</template>

<script>
  import Mapp from './Mapp'
  export default{
    name:'Single',
    components:{Mapp},
    data(){
      return{
        message:{},
        id:this.$route.params.id
      }
    },
    created(){  //'http://jsonplaceholder.typicode.com/posts/'
      this.$axios.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
      .then((res)=>{
        console.log(res.data);
        this.message = res.data;
      }).catch(()=>{
        alert('数据请求失败');
      })
    }
  }
</script>

<style scoped="scoped">
   h1{height: 80px;background: #888888;width: 100%;line-height: 80px;color: #fff;text-align: center;font-size: 36px;margin-bottom: 10px;}
</style>
