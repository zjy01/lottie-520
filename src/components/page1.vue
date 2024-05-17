<template>
  <div class="page">
    <div>
      <!-- 留空 -->
    </div>
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
        <dotlottie-player :src="num0" :autoplay.attr="true" :loop.attr="true" />
      </div>
    </div>
    <div class="text-box">
      <div
        class="chat-box chat-left animate__animated animate__lightSpeedInLeft animate__fast"
      >
        <div class="avator">
          <img src="../assets/zzb-bg.png" />
        </div>
        <div class="msg">
          <div class="name">嫡长猫: 张张苞</div>
          <div class="text">家庭支柱</div>
        </div>
      </div>
      <div
        class="chat-box chat-left animate__animated animate__lightSpeedInLeft animate__fast"
      >
        <div class="avator">
          <img src="../assets/zjh-bg.png" style="height: 70%" />
        </div>
        <div class="msg">
          <div class="name">大犟种: 张茄灰</div>
          <div class="text">养猫圣手</div>
        </div>
      </div>
      <div
        class="chat-box chat-right animate__animated animate__lightSpeedInRight animate__fast"
      >
        <div class="msg">
          <div class="text">心尖美人</div>
        </div>
        <div class="avator">
          <img src="../assets/hunyuan-image-boy-bg.png" style="height: 100%" />
        </div>
      </div>
    </div>
    <div class="banner-box">
      <img
        src="../assets/hunyuan-image-boy-bg.png"
        class="banner-boy animate__animated animate__fadeInLeft animate__slow"
      />
      <img
        src="../assets/hunyuan-image-girl-bg.png"
        class="banner-girl animate__animated animate__fadeInRight animate__slow"
      />
      <img src="../assets/zzb-bg.png" class="banner-cat1" />
      <img src="../assets/zjh-bg.png" class="banner-cat2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import num5 from "../assets/num-5.lottie";
import num2 from "../assets/num-2.lottie";
import num0 from "../assets/num-0.lottie";
import heart from "../assets/heart.lottie";
import { Ref, inject, onMounted } from "vue";
  import { useSwiper } from 'swiper/vue';

const allowTouchMove = inject<Ref<boolean>>('allowTouchMove');
const swpier = useSwiper();
onMounted(() => {
  setTimeout(() => {
    swpier.value.allowTouchMove = true;
    allowTouchMove!.value = true;
  }, 2000);
})
</script>

<style scoped lang="less">
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.num-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  flex-shrink: 1;

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
      fadeIn 5s,
      heartBeat 2s ease-in-out infinite;
  }
  .avator-girl {
    position: absolute;
    width: 37%;
    bottom: 23%;
    left: 31%;
    animation:
      fadeIn 5s,
      heartBeat 2s ease-in-out infinite 1s;
  }
}

.text-box {
  padding: 0 5vw;
  .avator {
    width: 10vw;
    height: 10vw;
    border-radius: 12%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 90%;
    }
  }
  .chat-box {
    display: flex;
    .name {
      font-size: 12px;
      line-height: 1.4;
      margin-top: -2px;
      color: #8e8e8e;
    }
  }
  .text {
    padding: 0 2.4vw;
    height: 10vw;
    line-height: 10vw;
    border-radius: 5px;
    background-color: #fff;
    position: relative;
    margin-bottom: 10px;
    margin-top: 2px;
    display: inline-block;
    color: #171717;

    &::before {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      border: 5px solid transparent;
      top: 15px;
    }
  }

  .chat-left {
    text-align: left;
    .avator {
      transform: rotateY(180deg);
    }
    .name {
      margin-left: 10px;
    }
    .text {
      margin-left: 10px;
      &::before {
        border-right-color: #fff;
        left: -9px;
      }
    }
  }
  .chat-right {
    float: right;
    .name {
      margin-right: 10px;
      text-align: right;
    }
    .text {
      margin-right: 10px;
      text-align: right;
      background-color: #95ec69;
      &::before {
        border-left-color: #95ec69;
        right: -9px;
      }
    }
  }
}

.banner-box {
  position: relative;
  height: 70vw;
  flex-shrink: 1;

  .banner-boy {
    position: absolute;
    width: 70vw;
    top: 0;
    right: -7vw;
  }
  .banner-cat1 {
    position: absolute;
    width: 10vw;
    top: 3.5vw;
    left: 44vw;
    animation:
      fadeInLeftBig 2s ease-in-out,
      tada 2s ease-in-out infinite;
  }
  .banner-cat2 {
    position: absolute;
    width: 12vw;
    top: 39vw;
    right: 39vw;
    animation:
      fadeInRightBig 2s ease-in-out,
      bounce 2s ease-in-out infinite;
  }
  .banner-girl {
    position: absolute;
    width: 70vw;
    top: 0;
    left: -7vw;
  }
}
</style>
