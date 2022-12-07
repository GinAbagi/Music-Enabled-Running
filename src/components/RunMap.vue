<template>
  <div
    class="h-96 m-3 p-2 -mt-3 rounded-xl bg-white box shadow-lg drop-shadow-2xl"
  >
    <template v-if="dataLoaded">
      <l-map
        :zoom="zoom"
        :center="center"
        :zoomControl="zoomControl"
        style="width: 100%"
        class="z-10"
      >
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-polygon :lat-lngs="polygon.latlngs" :color="polygon.color" />
        <!-- <l-circle :lat-lng="circle.center" :radius="circle.radius" /> -->
      </l-map>
    </template>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
// import { latLng } from "leaflet";
import { LMap, LTileLayer, LPolygon } from "@vue-leaflet/vue-leaflet";

export default {
  name: "GeometryTest",
  components: {
    LMap,
    LTileLayer,
    LPolygon,
    // LCircle,
  },
  props: {
    detailsRun: Array,
  },
  data() {
    return {
      startPoint: [],
      dataLoaded: false,
      zoom: 12,
      center: [],
      zoomControl: false,
      polygon: {
        latlngs: [],
        color: "#8B80F8",
      },
      // circle: {
      //   center: latLng(),
      //   radius: 450,
      // },
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    };
  },
  mounted() {
    this.insertLatLng();
  },
  methods: {
    insertLatLng() {
      this.detailsRun[0].forEach((value) => {
        value.location.forEach((el) => {
          this.polygon.latlngs.push(el);
        });
      });
      let total1 = 0;
      let total2 = 0;
      // this.circle.center.push(this.detailsRun[0][0].location[0])
      //       console.log(this.startPoint);

      for (var i = 0; i < this.polygon.latlngs.length; i++) {
        total1 += this.polygon.latlngs[i][0];
        total2 += this.polygon.latlngs[i][1];
      }
      var avg1 = total1 / this.polygon.latlngs.length;
      var avg2 = total2 / this.polygon.latlngs.length;
      this.center = [avg1, avg2];
      this.dataLoaded = true;
    },
  },
};
</script>

<style scoped>
.leaflet-zoom-box {
  display: none;
}
</style>
