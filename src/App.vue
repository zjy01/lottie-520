<template>
  <div style="position: relative; overflow: hidden;">
    <Page2 />
    <!-- <CssBg />
    <Start v-if="!started" v-model="allowMusice" @start="started = true" />
    <div v-else>
      <audio v-if="allowMusice" id="bgMusic" autoplay loop>
        <source src="./assets/emola.ogg" type="audio/mp3" />
      </audio>
      <Page1 />
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import CssBg from "./components/css-bg.vue";
import Start from "./components/start.vue";
import Page1 from "./components/page1.vue";
import Page2 from "./components/page2.vue";
const started = ref(false);
const allowMusice = ref(true);
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
