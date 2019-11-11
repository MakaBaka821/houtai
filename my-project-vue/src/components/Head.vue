<template>
  <header>
   <nav>
     <router-link to="/" >首页</router-link>
      <router-link to="/list">列表</router-link>
       <router-link to="/shop">购物</router-link>
        <router-link to="/comand">管理</router-link>
        <template>
              <el-avatar class="demo-type" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
               <router-link to="/login" class="logout">退出登陆</router-link>
        </template>

   </nav>
  </header>
</template>

<script>
  export default{
    name:'Head',
    data(){
      return{
        user:'xxxx'
      }
    }
  }
</script>

<style scoped="scoped">
  header{height: 80px;width: 100%;line-height: 80px;text-align: center;background: #000000;margin-bottom: 10px;}
  a{ color: white;text-decoration: none;padding: 6px 20px; margin: 0 10px; background: #CACACA;border-radius: 10px;}
.router-link-exact-active{color: #42B983;background:white ; }
.demo-type,.logout{position: relative;top: 13px;right:-25%;}
/* .demo-type{display: inline-block;margin-left: 100px;} */
.logout{top:0px;background: none;font-size: 10px;margin: 0;padding: 0;}
</style>
