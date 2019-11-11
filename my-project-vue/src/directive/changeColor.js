import Vue from 'vue'
const changeColor=Vue.directive('changeColor',function(el,binding){
  // console.log(Math.random().toString(16))
  el.style.color='#'+Math.random().toString(16).slice(2,8)
  el.style.fontSize=binding.value.font
  if(binding.arg==='ita'){
    el.style.fontStyle='italic'
  }
})


 export default changeColor
