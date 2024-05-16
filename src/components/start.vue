<template>
  <div class="page">
    <div>
      <dotlottie-player
        :src="heart"
        :autoplay.attr="true"
        :loop.attr="true"
        class="love"
      />
      <div class="title">
        <span>展</span>
        <span>信</span>
        <span>悦</span>
      </div>
    </div>
    <div style="position: relative;">
      <dotlottie-player
        :src="button"
        :autoplay.attr="true"
        :loop.attr="true"
        class="btn"
        
      />
      <label class="checkbox">
        <input type="checkbox" :checked="!model" @change="handleClick" />
        <span>不要音乐</span>
      </label>
      <div @click="$emit('start', {})" class="click-area"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import heart from "../assets/love.lottie";
import button from "../assets/button.lottie";

const model = defineModel<boolean>();
defineEmits(["start"]);

function handleClick(e: any) {
  console.log("e", e);
  model.value = !e.target?.checked;
}
</script>

<style scoped lang="less">
.page {
  font-family: 'youxi';
  height: 100vh;
  width: 100vw;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.title {
  font-size: 20vw;
  text-align: center;
  & > span {
    display: inline-block;
    animation: pulse-text 1s ease-in-out infinite;

    &:nth-child(1) {
      animation-delay: 1s;
    }
    &:nth-child(2) {
      animation-delay: 1.3s;
    }
    &:nth-child(3) {
      animation-delay: 1.6s;
    }
  }
}
.love {
  height: 30vh;
}
.btn {
  height: 30vh;
}
.click-area {
  position: absolute;
  width: 60vw;
  left: 20vw;
  height: 6vh;
  top: 11.5vh;
}
input[type="checkbox"] {
  accent-color: #00d9b1;
}
.checkbox {
  position: absolute;
  left: 50%;
  top: 7vh;
  transform: translateX(-50%);
}
@keyframes pulse-text {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        text-shadow: #027d67 -0.02em -0.02em;
    }

    50% {
        -webkit-transform: scale3d(1.05,1.05,1.05);
        transform: scale3d(1.05,1.05,1.05);
        text-shadow: #027d67 -0.03em -0.03em;
    }

    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        text-shadow: #027d67 -0.02em -0.02em;
    }
}
</style>
