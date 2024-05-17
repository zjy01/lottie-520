<template>
  <div style="position: relative; overflow: hidden">
    <CssBg />
    <Start v-if="!started" v-model="allowMusice" @start="started = true" />
    <div v-else>
      <audio v-if="allowMusice" id="bgMusic" autoplay loop>
        <source src="./assets/emola.ogg" type="audio/mp3" />
      </audio>
      <Swiper
        :allow-touch-move="allowTouchMove"
        direction="vertical"
        auto-height
        :allow-slide-next="allowSlideNext"
        @slide-change="onSlideChange"
      >
        <SwiperSlide><Page1 v-if="inited[0]" /></SwiperSlide>
        <SwiperSlide><Page2 v-if="inited[1]" /></SwiperSlide>
        <SwiperSlide><Page3 v-if="inited[2]" /></SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { provide, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperClass from "swiper";
import "swiper/css";

import CssBg from "./components/css-bg.vue";
import Start from "./components/start.vue";
import Page1 from "./components/page1.vue";
import Page2 from "./components/page2.vue";
import Page3 from "./components/page3.vue";
const started = ref(false);
const allowMusice = ref(true);
const inited = ref([true, false, false]);

const allowTouchMove = ref(false);
provide("allowTouchMove", allowTouchMove);
const allowSlideNext = ref(true);
provide("allowSlideNext", allowSlideNext);

function onSlideChange(swiper: SwiperClass) {
  if (!inited.value[swiper.activeIndex]) {
    inited.value[swiper.activeIndex] = true;
  }
  // 第2页不允许滑动到下一页
  allowSlideNext.value = swiper.activeIndex !== 1;
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
