import Vue from 'vue'
import Router from 'vue-router'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
// import Home from '@/components/Home'
// import List from '@/components/List'
// import Shop  from '@/components/Shop'
// import Comand from '@/components/Comand'
const Home=()=>import('@/components/Home')
const List=()=>import('@/components/List')
const Shop=()=>import('@/components/Shop')
const Comand=()=>import('@/components/Comand')
const Type1=()=>import('@/components/Type1')
const Type2=()=>import('@/components/Type2')
const Type3=()=>import('@/components/Type3')
const Type4=()=>import('@/components/Type4')
const Single=()=>import('@/components/Single')
const Mapp=()=>import('@/components/Mapp')
const Login=()=>import('@/components/Login')
const Falsea=()=>import('@/components/Falsea')
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        KeepAlive:true
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/comand',
      name: 'Comand',
      component: Comand,
      children:[
        {path:'/comand',component:Type1},
        {path:'type1',component:Type1},
        {path:'type2',component:Type2},
        {path:'type3',component:Type3},
        {path:'type4',component:Type4},
      ]
    },
    {
      path: '/single/:id',
      name: 'Single',
      component: Single
    },
    {
      path: '/mapp',
      name: 'Mapp',
      component: Mapp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/*',
      name: 'Falsea',
      component: Falsea
    },
  ]
})
