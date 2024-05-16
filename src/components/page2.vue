<template>
  <div class="page">
    <div class="left load" v-if="leftAnimation">
      <img src="../assets/zjh-flash.png" />
      <div class="dl">
        <div class="text">
          <span>才</span>
          <span>情</span>
          <span>出</span>
          <span>众</span>
          <span>爱</span>
          <span>猫</span>
          <span>缘</span>
        </div>
      </div>
    </div>
    <div class="right load" v-if="rightAnimation">
      <img src="../assets/zzb-flash.png" />
      <div class="dl">
        <div class="text">
          <span>貌</span>
          <span>赛</span>
          <span>花</span>
          <span>魁</span>
          <span>猫</span>
          <span>中</span>
          <span>仙</span>
        </div>
      </div>
    </div>
    <div class="top load" v-if="topAnimation">
      <div class="dl dl-t">
        <div class="text">
          <span>善</span>
          <span>心</span>
          <span>美</span>
          <span>人</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const dlDuration = 3000;
const rightAnimation = ref(false);
const leftAnimation = ref(false);
const topAnimation = ref(false);
onMounted(() => {
  // 上联加载
  setTimeout(() => {
    rightAnimation.value = true;
  });
  // 下联加载
  setTimeout(() => {
    leftAnimation.value = true;
  }, dlDuration);
  // 横幅加载
  setTimeout(() => {
    topAnimation.value = true;
  }, dlDuration * 2);
})
</script>

<style scoped lang="less">
.page {
  height: 100vh;
  overflow: hidden;
  font-family: 'dl';
}
.left {
  position: absolute;
  height: 80vh;
  left: 5vw;
  top: 28vw;

  img {
    height: 10vw;
    position: absolute;
    left: -4vw;
    top: 2vw;
  }
  &.load img {
    animation: fadeInLeft 1s;
  }
}
.right { 
  position: absolute;
  height: 80vh;
  right: 5vw;
  top: 28vw;
  img {
    height: 15vw;
    position: absolute;
    right: -5vw;
  }
}
.load {
  img {
    animation: fadeInRight .8s;
  }
  .dl {
    @t: 3s;
    height: 0vw;
    animation: dl-v-animation @t linear .7s forwards;
    span {
      each(range(7), {
        &:nth-child(@{value}) {
          animation: jackInTheBox 1s ease-in-out (@t / 9 * (@value + 1) + 0.3s) forwards;
        }
      });
    }
  }
  .dl-t {
    @t: 1.2s;
    width: 0vw;
    animation: dl-h-animation @t linear;
    span {
      each(range(4), {
        &:nth-child(@{value}) {
          animation: jackInTheBox 1s ease-in-out (@t / 5 * (4 - @value + 1)) forwards;
        }
      });
      // &:nth-child(4) {
      //   animation: pulse 1s ease-in-out forwards;
      // }
      // &:nth-child(3) {
      //   animation: pulse 1s ease-in-out 1+.8s forwards;
      // }
      // &:nth-child(2) {
      //   animation: pulse 1s ease-in-out 1+.8s * 2 forwards;
      // }
      // &:nth-child(1) {
      //   animation: pulse 1s ease-in-out 1+.8s * 3 forwards;
      // }
    }
  }
}
.top { 
  position: absolute;
  top: 5vw;
  left: 25vw;
  height: 15vw;
  width: 50vw;
  .dl-t {
    top: 0;
    height: 15vw;
    width: 50vw;
    line-height: 15vw;
    font-size: 9vw;
    background-image: url('../assets/dl-h.png');
    background-size: 50vw 100%;
    background-position: right; 
    .text {
      padding-top: 0;
      height: 15vw;
      width: 50vw;
      left: unset;
      right: 0;
    }
  }
}
.dl {
  position: relative;
  top: 15vw;
  width: 15vw;
  height: 128vw;
  font-size: 10vw;
  text-align: center;
  text-shadow: rgba(0, 0, 0, .5) 1px 1px;
  line-height: 1.4em;
  color: #e4dbab;
  background-image: url('../assets/dl-s.png');
  background-size: 100% 128vw; 
  background-repeat: no-repeat;
  overflow: hidden;

  span {
    display: inline-block;
    opacity: 0;
  }

  .text {
    position: absolute;
    padding-top: 15vw;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

@keyframes dl-v-animation {
  from {
    height: 0vw;
  }
  to {
    height: 128vw;
  }
}

@keyframes dl-h-animation {
  from {
    width: 0;
  }
  to {
    width: 50vw;
  }
}

</style>
