<template>
  <div>

    <el-row>

      <el-card  shadow="hover">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div class="userMessage">
          <div>用户名：x</div>
          <div>年龄：18岁</div>
          <div>职位：经理</div>
        </div>
      </el-card>

    </el-row>


    <!-- 日历 -->
    <div class="rili" ><el-card shadow="hover"><el-calendar v-model="value"> </el-calendar></el-card></div>


  </div>
</template>

<script>
  export default {
    name: 'Type1',
    data() {
      return {
        value: new Date()
      }
    }

  }
</script>

<style scoped="scoped">
  /* 图片 */
  .el-row {
    float: left;
    text-align: center;

  }
  .userMessage div{
    border-bottom:1px solid #000000 ;
    padding: 10px 0;
  }
/*
  .time {
    font-size: 13px;
    color: #999;
  } */

/*  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }
 */
  .image {
    width: 100%;
    display: block;
  }

/*  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  } */

  /* 日历 */
  .rili{width: 60%;float: right;}
  img{display: block;border-radius: 50%;}

</style>
