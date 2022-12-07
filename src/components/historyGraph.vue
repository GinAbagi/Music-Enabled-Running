<template>
  <div class="h-80 m-2 rounded-xl bg-white box shadow-lg drop-shadow-2xl">
    <template v-if="dataLoaded">
      <img v-bind:src="images.pear" class="-mb-10 ml-3 mt-2" />
      <vue-echarts :option="option" class="chart" ref="chart" />
    </template>
  </div>
</template>

<script>
import { VueEcharts } from "vue3-echarts";

export default {
  name: "HistoryGraph",
  props: {
    historyRun: Array,
  },
  data() {
    return {
      images: {
        pear: require("../assets/pear.png"),
      },
      dataLoaded: false,
      option: {
        tooltip: {},
        chart: {
          zoom: {
            enabled: false,
          },
        },
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: [
          {
            type: "value",
            show: false,
          },
        ],
        series: [
          {
            name: "Total pears earned",
            data: [],
            type: "bar",
            label: {
              show: true,
              position: "top",
            },
            itemStyle: {
              color: "#A7E000",
              borderRadius: [100, 100, 0, 0],
            },
            barWidth: 20,
            animation: true,
            barCategoryGap: "0%",
          },
        ],
      },
    };
  },
  methods: {},
  mounted() {
    for (let index = 0; index < 5; index++) {
      let myDate = new Date(this.historyRun[index].timestamp * 1000);
      var curr_date = myDate.getDate();
      var curr_month = myDate.getMonth() + 1;
      let convertedDate = curr_date + "-" + curr_month;
      this.option.xAxis.data.push(convertedDate);
      this.option.series[0].data.push(
        this.historyRun[index].pears.totalPearScore
      );
    }
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
}
</style>