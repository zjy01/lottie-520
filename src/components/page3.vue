<template>
  <div v-if="swiperSlide.isActive" class="page">
    <div class="text-box">
      <div
        v-if="firstTextShow"
        class="chat-box chat-left animate__animated animate__lightSpeedInLeft animate__fast"
      >
        <div class="avator">
          <img src="../assets/zzb-bg2.png" />
        </div>
        <div class="msg">
          <div class="name">嫡长猫: 张张苞</div>
          <div class="text">{{ text.promise }}{{ text.cat1Promise }}</div>
        </div>
      </div>
      <div
        v-if="secondTextShow"
        class="chat-box chat-left animate__animated animate__lightSpeedInLeft animate__fast"
      >
        <div class="avator avator-180">
          <img src="../assets/zjh-bg2.png" style="height: 70%" />
        </div>
        <div class="msg">
          <div class="name">大犟种: 张茄灰</div>
          <div class="text">{{ text.promise }}{{ text.cat2Promise }}</div>
        </div>
      </div>
      <div
        v-if="thirdTextShow"
        class="chat-box chat-right animate__animated animate__lightSpeedInRight animate__fast"
      >
        <div class="msg">
          <div class="text">{{ text.promise }}{{ text.humanPromise }}</div>
        </div>
        <div class="avator">
          <img src="../assets/hunyuan-image-boy-bg.png" style="height: 100%" />
        </div>
      </div>
    </div>
    <Transition
      name="t1"
      enter-active-class="animate__animated animate__zoomInDown"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <div v-if="firstDialogShow" class="dialog">
        <div class="avator">
          <img src="../assets/zzb-bg2.png" />
        </div>
        <div class="label">{{ text.promise }}</div>
        <div class="talk">{{ text.cat1Promise }}</div>
      </div>
    </Transition>
    <Transition
      name="t2"
      enter-active-class="animate__animated animate__zoomInDown"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <div v-if="secondDialogShow" class="dialog">
        <div class="avator avator-180">
          <img src="../assets/zjh-bg2.png" />
        </div>
        <div class="label">{{ text.promise }}</div>
        <div class="talk">{{ text.cat2Promise }}</div>
      </div>
    </Transition>
    <Transition
      name="t3"
      enter-active-class="animate__animated animate__zoomInDown"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <div v-if="thirdDialogShow" class="dialog dialog-p">
        <div class="avator">
          <img src="../assets/hunyuan-image-boy-bg.png" />
        </div>
        <div class="label">{{ text.promise }}</div>
        <div class="talk">{{ text.humanPromise }}</div>
      </div>
    </Transition>

    <div
      v-if="finalDialogShow"
      class="girl-heart animate__animated animate__bounceIn"
    >
      <dotlottie-player
        class="lottie"
        :src="blHeart"
        :autoplay.attr="true"
        :loop.attr="true"
        @ready="lottieReady"
      />
      <img v-if="imgShow" src="../assets/girl-heart.png" />
    </div>

    <div
      v-if="finalDialogShow"
      class="dialog dialog-final animate__animated animate__fadeInUp"
    >
      <div class="avator avator1">
        <img src="../assets/zzb-bg2.png" />
      </div>
      <div class="avator avator2">
        <img src="../assets/zjh-bg2.png" />
      </div>
      <div class="avator avator3">
        <img src="../assets/hunyuan-image-boy-bg.png" />
      </div>
      <div class="talk">
        {{ text.togger[0] }}<br />{{ text.togger[1]
        }}<span style="font-size: 7vw">{{ text.togger[3] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useSwiperSlide } from "swiper/vue";
import text from "../config/text";
import blHeart from "../assets/bl-heart.lottie";

const swiperSlide = useSwiperSlide();

const firstDialogShow = ref(false);
const secondDialogShow = ref(false);
const thirdDialogShow = ref(false);
const firstTextShow = ref(false);
const secondTextShow = ref(false);
const thirdTextShow = ref(false);
const finalDialogShow = ref(false);
const imgShow = ref(false);

const dialogDuration = 2000;
const textDuration = 1000;
onMounted(() => {
  setTimeout(() => {
    firstDialogShow.value = true;
  });
  setTimeout(() => {
    firstTextShow.value = true;
    firstDialogShow.value = false;
  }, dialogDuration);

  setTimeout(() => {
    secondDialogShow.value = true;
  }, dialogDuration + textDuration);
  setTimeout(
    () => {
      secondTextShow.value = true;
      secondDialogShow.value = false;
    },
    dialogDuration * 2 + textDuration,
  );

  setTimeout(
    () => {
      thirdDialogShow.value = true;
    },
    dialogDuration * 2 + textDuration * 2,
  );
  setTimeout(
    () => {
      thirdTextShow.value = true;
      thirdDialogShow.value = false;
    },
    dialogDuration * 3 + textDuration * 2,
  );

  setTimeout(
    () => {
      finalDialogShow.value = true;
    },
    dialogDuration * 3 + textDuration * 3,
  );
});

function lottieReady(e) {
  imgShow.value = true;
  // 透明化
  const g: HTMLElement = e.target.container.querySelector(
    "#animation > svg > g > g:nth-child(1)",
  );
  g.style.opacity = "0.5";
}
</script>

<style scoped lang="less">
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.text-box {
  padding: 5vh 5vw;
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
    margin-bottom: 15px;
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
    .avator-180 {
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

.dialog {
  font-family: "youxi";
  padding: 2vh 8vw;
  position: absolute;
  font-size: 5vw;
  left: 10vw;
  background-color: #fff;
  border-radius: 4vw;
  top: 40vh;
  width: 80vw;
  border: #00d9b1 1vw solid;
  color: #027d67;

  .avator {
    width: 25vw;
    position: absolute;
    top: -8vw;
    left: -8vw;
    img {
      width: 100%;
    }
  }
  .avator-180 {
    transform: rotateY(180deg);
    top: -6vw;
  }
  .label {
    position: absolute;
    top: 1vh;
    left: 18vw;
  }
  .talk {
    margin-top: 3.5vh;
    margin-left: 6vw;
  }
}
.dialog-p {
  .avator {
    width: 18vw;
    top: -8vw;
    left: -6vw;
  }
}

.dialog-final {
  top: unset;
  bottom: 1vh;
  z-index: 999;
  .avator1 {
    left: 8vw;
    top: -10vw;
  }
  .avator2 {
    left: unset;
    right: 8vw;
    top: -6vw;
  }
  .avator3 {
    width: 20vw;
    left: 30vw;
    top: -10vw;
  }
  .talk {
    padding: 7vw 8vw;
    padding-bottom: 3vw;
    margin-top: 0;
    text-align: center;
    margin-left: 0;
  }
}

.girl-heart {
  position: relative;
  text-align: center;
  margin-bottom: 60vw;
  flex-shrink: 1;
  img {
    width: 50%;
    animation: imgScale 2.48s ease-in-out infinite;
  }
  .lottie {
    position: absolute;
    height: calc(100% / 0.6);
    top: 48.6%;
    left: -0.5%;
    transform: translateY(-50%);
    z-index: 1;
    .animation-container {
      opacity: 0.3;
      .animation > svg > g > g:nth-child(1) {
        opacity: 0.3;
      }
    }
  }
}

@keyframes imgScale {
  0%,
  66.4%,
  85.9%,
  100% {
    transform: scale(1);
  }
  76.5% {
    transform: scale(1.08);
  }
}
</style>
