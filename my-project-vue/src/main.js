// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  changeColor from'./directive/changeColor'
import filter from'./directive/filter'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import fn from './directive/aaa'
// import store from './store/store'
Vue.use(ElementUI);
import axios from 'axios'
Vue.prototype.$axios=axios
Vue.config.productionTip = false


// Vue.directive('changeColor',function(el,binding){
//   // console.log(Math.random().toString(16))
//   el.style.color='#'+Math.random().toString(16).slice(2,8)
//   el.style.fontSize=binding.value.font
//   if(binding.arg==='ita'){
//     el.style.fontStyle='italic'
//   }
// })


// Vue.filter('upper',function(v){
//   return v.toUpperCase()
// })



router.beforeEach(function(to,from,next){
    // let login=false

    if(to.path==='/login'){//表示登陆状态
      next()
    }else if(localStorage.key(0)=='x') {
      next()
    }else{
      alert("请先登录")
      next('./login')
    }

})





new Vue({
  el: '#app',
  router,
  components: { App },

  template: '<App/>'
})
