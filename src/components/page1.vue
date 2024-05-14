<template>
  <div>
    <div class="num-box">
      <div class="num-big">
        <img src="../assets/dba-boy.png" class="avator-boy" />
        <dotlottie-player :src="num5" :autoplay.attr="true" />
      </div>
      <div class="num-small">
        <dotlottie-player
          :src="heart"
          :loop.attr="true"
          :autoplay.attr="true"
          class="heart animate__animated animate__fadeIn animate__slow"
        />
        <dotlottie-player :src="num2" :autoplay.attr="true" />
      </div>
      <div class="num-big">
        <img src="../assets/dba-girl.png" class="avator-girl" />
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
import heart from "../assets/heart.lottie";
</script>

<style scoped lang="less">
.num-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
}
.num-big {
  width: 40%;
  transform: scale(1.5);
  position: relative;
}
.num-small {
  position: relative;
  width: 20%;
  transform: scale(1.5);
  margin-bottom: 20px;
}
.heart {
  position: absolute;
  width: 70%;
  top: 6%;
  left: -8%;
}
.avator-boy {
  position: absolute;
  width: 30%;
  bottom: 21%;
  left: 31%;
  animation:
    fadeIn 2s,
    heartBeat 2s ease-in-out infinite 2s;
}
.avator-girl {
  position: absolute;
  width: 37%;
  bottom: 23%;
  left: 31%;
  animation:
    fadeIn 2s,
    heartBeat 2s ease-in-out infinite 3s;
}
</style>
