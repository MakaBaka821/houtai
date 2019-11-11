<template>
  <div>
    <div id="main" style="width: 40%;height:400px;float: left;" ref="bar"></div>
    <div style="width: 48%;height:400px;float:left;" ref="pie"></div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Type4',

    mounted() {
      var bar = this.$echarts.init(this.$refs.bar);
      // 指定图表的配置项和数据
      var option = {

        color: ['#409EFF'],
        title: {
          text: 'ECharts销量统计图'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };

      // 使用刚指定的配置项和数据显示图表。
      bar.setOption(option);

      var pie = this.$echarts.init(this.$refs.pie);
      var pieOption = {
        title: {
          text: "广告费用分布",
          subtext: "第一季度",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "right",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [{
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
           {value:235, name:'视频广告'},
           {value:274, name:'联盟广告'},
           {value:310, name:'邮件营销'},
           {value:335, name:'直接访问'},
           {value:800, name:'搜索引擎',itemStyle: { color: '#409EFF' }}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }]
      };
      pie.setOption(pieOption);

    }
  }
</script>

<style scoped="scoped">
</style>
