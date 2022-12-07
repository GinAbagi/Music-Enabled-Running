<template>
  <div
    class="h-96 m-3 -mt-3 p-3 rounded-xl bg-white box shadow-lg drop-shadow-2xl"
  >
    <template v-if="dataLoaded">
      <img v-bind:src="images.pear" class="-mb-10 ml-3 mt-1" />
      <vue-echarts :option="option" class="chart" ref="chart" />
    </template>
  </div>
</template>

<script>
import { VueEcharts } from "vue3-echarts";
import * as echarts from "echarts";

export default {
  props: {
    detailsRun: Array,
  },
  data() {
    return {
      images: {
        pear: require("../assets/pear.png"),
      },
      dataLoaded: false,
      maxPears: "400",
      countSongs: Number,
      option: {
        color: ["#A7E000"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#A7E000",
            },
          },
        },
        // legend: {
        //   data: ["Line 1"],
        // },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {},
        //   },
        // },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Pears per song",
            type: "line",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 2, 0, [
                {
                  offset: 0,
                  color: "#A7E000",
                },
                {
                  offset: 1,
                  color: "rgba(1, 191, 236)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [],
          },
        ],
      },
    };
  },
  methods: {},
  mounted() {
    let count = 0;
    this.detailsRun[0].forEach((value) => {
      let pearPercentage = value.stats.pear_score;
      count++;
      this.option.xAxis[0].data.push(count);
      this.option.series[0].data.push(pearPercentage);
    });
    this.dataLoaded = true;
  },
  components: {
    VueEcharts,
  },
};
</script>
<style scoped>
.chart {
  height: 100%;
  width: 100%;
  /* margin-left: 10px; */
}
</style>