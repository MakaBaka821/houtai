<template>

  <div class="login">
    <div class="login_inner">
     <!-- <img src="../assets/323672.jpg" /> -->
      <el-row :gutter="24">
        <el-col :span="24">
      <el-card shadow="hover">



      <h1>请您登陆</h1>
      <el-input placeholder="用户名,没有会自动注册" suffix-icon="el-icon-user-solid
" v-model="user" class="user">
      </el-input>
      <el-input placeholder="密码" suffix-icon="el-icon-question" v-model="pass" class="pass">
      </el-input><br>
      <el-button type="primary" @click="submitFn">登陆</el-button>
      <el-button type="warning" @click="resetFn">重置</el-button>

    </el-card>
     </el-col>
     </el-row>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        user: '',
        pass: '',
        obj: {},

      }
    },
    methods: {
      submitFn() {
        this.$axios.post('./api', {
            user: this.user,
            pass: this.pass
          }).then((res) =>{
              for (let n = 0; n < 10; n++) {
                if(!localStorage.getItem(this.user)){
                     localStorage.setItem(this.user, this.pass)
                }
                else{
                  if (localStorage.getItem(this.user) == this.pass) {
                   this.$message({
                     showClose: true,
                     message:'登陆成功，欢迎用户'+this.user,
                     type: 'success'
                   })
                    this.$router.push('/')
                    return this.user
                  } else {
                    this.$message({
                      showClose: true,
                      message:'密码错误',
                      type: 'error'
                    })
                    return
                  }
                }
              }
            })
          },
        resetFn() {
            this.user = '',
              this.pass = ''
          }
      }
      }
</script>

<style scoped="scoped">
  h1 {
    font-size: 2em;
    font-weight: bold;
    margin: 20px;
  }

  .login_inner {
    height: 300px;
    width: 500px;
    margin: 150px auto;
    text-align: center;
  }

  .user,
  .pass {
    margin-bottom: 30px;
    width: 80%;
  }
  /* .login{width: 100%;background: url('../assets/1.jpg');overflow: hidden;} */
</style>
