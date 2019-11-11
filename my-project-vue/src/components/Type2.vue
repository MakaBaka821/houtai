<template>
<div>
    <!-- 待办事项 -->
    <div style="overflow: hidden;">
      <div class="box1" >
    <h1>待办事项</h1>
      <template>
        <el-transfer
          :titles="['未完成','已完成']"
          filterable
          :filter-method="filterMethod"
          filter-placeholder="请输入拼音"
          v-model="value"
          :data="data">
        </el-transfer>
      </template>
      </div>
     <!-- 图片 -->
     <div class="prc">
     <el-row>
         <el-card :body-style="{ padding: '0px' }" shadow="hover">
           <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
           <div style="padding: 14px;">
             <span>图片鉴赏</span>
             <div class="bottom clearfix">
               <time class="time">{{ currentDate }}</time>
             </div>
           </div>
         </el-card>
     </el-row>
     <el-row>
         <el-card :body-style="{ padding: '0px' }" shadow="hover">
           <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
           <div style="padding: 14px;">
             <span>图片鉴赏</span>
             <div class="bottom clearfix">
               <time class="time">{{ currentDate }}</time>
             </div>
           </div>
         </el-card>
     </el-row>
     </div>
     </div>
  <!-- </el-row> -->
  <!-- 折叠面板 -->
  <div>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="一致性 Consistency" name="1">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </el-collapse-item>
    <el-collapse-item title="反馈 Feedback" name="2">
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </el-collapse-item>
    <el-collapse-item title="效率 Efficiency" name="3">
      <div>简化流程：设计简洁直观的操作流程；</div>
      <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
      <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
    </el-collapse-item>
    <el-collapse-item title="可控 Controllability" name="4">
      <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
      <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
    </el-collapse-item>
  </el-collapse>
  </div>
</div>
</template>

<script>
  export default{
    name:'Type2',
    data() {
          const generateData = _ => {

            const data = [];
            const cities = ['吃饭', '睡觉', '打豆豆', '读书', '打球', '洗衣服', ];
            const pinyin = ['chifan', 'shuijiao', 'dadoudou', 'dushu', 'daqiu', 'xiyifu', ];
            cities.forEach((city, index) => {
              data.push({
                label: city,
                key: index,
                pinyin: pinyin[index]
              });
            });
            return data;
          };

          return {
             activeName: '1',

            currentDate: new Date(),

            data: generateData(),
            value: [],
            filterMethod(query, item) {
              return item.pinyin.indexOf(query) > -1;
            }
          };
        }
  }
</script>

<style scoped="scoped">
 .box1{float: left;}
  h1 {
    font-size: 2em;
    font-weight:400;
    margin: 20px;
    text-align: center;
  }
/* 图片 */
 .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
  .el-row{float: left;width: 40%;margin: 5%;}
  .prc{float: left;}

</style>
<style>
  .el-transfer-panel{width:153px;}
</style>
