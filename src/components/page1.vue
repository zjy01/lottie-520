<template>
  <div>
    <div class="num-box">
      <div class="num-big">
        <dotlottie-player :src="num5" :autoplay.attr="true" />
      </div>
      <div class="num-small">
        <dotlottie-player :src="num2" :autoplay.attr="true" />
      </div>
      <div class="num-big">
        <dotlottie-player :src="num0" :autoplay.attr="true" />
      </div>
      <!-- <dotlottie-player :src="num5" :autoplay.attr="true"class="num-big" />
        <dotlottie-player :src="num2" :autoplay.attr="true" class="num-small" />
        <dotlottie-player :src="num0" :autoplay.attr="true" class="num-big"/> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import num5 from "../assets/num-5.lottie";
import num2 from "../assets/num-2.lottie";
import num0 from "../assets/num-0.lottie";
</script>

<style scoped>
.num-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
}
.num-big {
  width: 40%;
  transform: scale(1.5);
}
.num-small {
  width: 20%;
  transform: scale(1.5);
  margin-bottom: 20px;
}
</style>
