<template>
  <div>
    <Head></Head>
    <el-container>
      <el-aside width="200px">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <router-link to="/comand/type1">
              <el-menu-item index="1-1">选项1</el-menu-item>
            </router-link>
            <router-link to="/comand/type2">
              <el-menu-item index="1-2">选项2</el-menu-item>
            </router-link>
            <router-link to="/comand/type3">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </router-link>
            <router-link to="/comand/type4">
              <el-menu-item index="1-4">选项4</el-menu-item>
            </router-link>

          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Head from './Head'
  import Type1 from './Type1'
  export default {
    name: 'Comand',
    components: {
      Head,
      Type1
    },
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped="scoped">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-aside {
    /* background-color: #D3DCE6; */
    /* color: #333; */
    /* text-align: center; */
    /* line-height: 200px; */
  }

  .el-main {
    /* background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px; */
  }

  a {
    text-decoration: none;
    color: #000000;
  }
</style>
