<template>
  <div class="page" v-if="swiperSlide.isActive">
    <div class="left load" v-if="leftShow">
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
    <div class="right load" v-if="rightShow">
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
    <div class="top load" v-if="topShow">
      <div class="dl dl-t">
        <div class="text">
          <span>善</span>
          <span>心</span>
          <span>美</span>
          <span>人</span>
        </div>
      </div>
    </div>
    <div class="opt animate__animated animate__zoomInDown" v-if="optShow">
      <div class="cat">
        <img src="../assets/zzb-good.png"/>
      </div>
      <p>请直视可爱之神<br />许下你的愿望</p>
      <div class="options">
        <div class="option-item">
          <dotlottie-player class="lottie" :src="box" :autoplay.attr="true" :loop.attr="true" />
          <span @click="showGiftDialog = true">选择一份礼品</span>
        </div>
        <div class="option-item">
          <dotlottie-player class="lottie2" :src="agreement" :autoplay.attr="true" :loop.attr="true" />
          <span @click="goNext">定下一份契约</span>
        </div>
      </div>
    </div>
    <div v-if="showGiftDialog" class="gift-dialog-mask" @click="showGiftDialog = false">
      <div class="gift-dialog animate__animated animate__zoomInDown">
        <p>请使用手机，自行选择以下任一款APP选择商品并下单，提供订单号进行报销。</p>
        <div class="icon-app">
          <img src="../assets/jd.png" />
          <img src="../assets/tb.png" />
          <img src="../assets/pdd.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, inject, onMounted, ref } from 'vue';
  import { useSwiperSlide, useSwiper } from 'swiper/vue';
import box from '../assets/box.lottie';
import agreement from '../assets/agreement.lottie';

const dlDuration = 3000 + 800;
const rightShow = ref(false);
const leftShow = ref(false);
const topShow = ref(false);
const optShow = ref(false); 
const showGiftDialog = ref(false); 

const swiperSlide = useSwiperSlide();
const swiper = useSwiper();

const allowSlideNext = inject<Ref<boolean>>('allowSlideNext');

function goNext() {
  allowSlideNext!.value = true;
  setTimeout(() => {
    swiper.value.slideNext();
  });
}

onMounted(() => {
  allowSlideNext!.value = false; 
  // 上联加载
  setTimeout(() => {
    rightShow.value = true;
  });
  // 下联加载
  setTimeout(() => {
    leftShow.value = true;
  }, dlDuration);
  // 横幅加载
  setTimeout(() => {
    topShow.value = true;
  }, dlDuration * 2);
  // 选项加载
  setTimeout(() => {
    optShow.value = true;
  }, dlDuration * 2 + 1500);
})
</script>

<style scoped lang="less">
.page {
  height: 100vh;
  width: 100vw;
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

.opt {
  font-family: 'youxi';
  width: 50vw;
  position: absolute;
  top: 30vh;
  left: 25vw;
  text-align: center;
  font-size: 6vw;
  text-shadow: #027d67 0.05em 0.05em;
  .cat {
    margin-left: 5vw;
    width: 40vw;
    height: 40vw;
    border-radius: 20%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .options {
    font-size: 4vw;
    .option-item {
      margin-left: -4vw;
      display: flex;
      justify-content: center;
      align-items: center;
      .lottie {
        width: 15vw;
      }
      .lottie2 {
        width: 10vw;
        margin: 2.5vw;
      }
      & > span {
        margin-left: -1vw;
        text-decoration: underline;
      }
    }
  }
}

.gift-dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.gift-dialog {
  font-family: 'youxi';
  padding: 8vw;
  position: absolute;
  font-size: 4vw;
  left: 10vw;
  background-color: #fff;
  border-radius: 4vw;
  top: 20vh;
  width: 80vw;
  border: #00d9b1 1vw solid;
  color: #027d67;

  .icon-app {
    text-align: center;
    img {
      margin: 0 1vw;
      width: 10vw;
      height: 10vw;
    }
  }
}

</style>
