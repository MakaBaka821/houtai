
<template>
      <div class="block">
        <el-carousel height="400px">
          <el-carousel-item v-for="item in 4" :key="item">
            <!-- <h3 class="small">{{ item }}</h3> -->
          </el-carousel-item>
        </el-carousel>
      </div>
  </div>
</template>

<script>
  export default{
    name:"Mapp"
  }
</script>

<style scoped="scoped">
   .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
      text-align: center;
    }

    .el-carousel__item:nth-child(2n) {

       background-color: #CC0000;
       background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573145679883&di=98fd468445508a6417d98057be788c25&imgtype=0&src=http%3A%2F%2Fwww.33lc.com%2Farticle%2FUploadPic%2F2012-10%2F2012101811362858544.jpg');
    }

    .el-carousel__item:nth-child(2n+1) {
       background-color: #d3dce6;
       background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573145679887&di=6777df4b72739a36c19aa93fb63e92a8&imgtype=0&src=http%3A%2F%2Fwww.33lc.com%2Farticle%2FUploadPic%2F2012-8%2F20128314175547732.jpg');
    }
</style>
