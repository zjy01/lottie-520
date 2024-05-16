<template>
  <div class="page">
    <div class="left">
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
    <div class="right">
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
    <div class="top">
      <div class="dl dl-t">
        <span>善</span>
        <span>心</span>
        <span>美</span>
        <span>人</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
.top { 
  position: absolute;
  height: 15vw;
  width: 50vw;
  top: 5vw;
  left: 25vw;
  .dl-t {
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 15vw;
    font-size: 9vw;
    background-image: url('../assets/dl-h.png');
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
  background-size: 100% 100%; 
  background-repeat: no-repeat;
  img {
    width: 100%;
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
</style>
