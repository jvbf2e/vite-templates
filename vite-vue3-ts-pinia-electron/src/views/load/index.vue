<template>
  <div class="load-container">
    <img :src="close" class="close-btn" />
    <div class="load-main">
      <img :src="logo" class="logo-img" />
      <div class="title">
        <p>新闻信息终端</p>
        <p>丰富 · 实时 · 高效 · 智能</p>
      </div>
    </div>
    <div class="load-process-box">
      <span>开始启动...</span>
      <span>{{ `${WebData.time}%` }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'

import { imgLocalUrl } from '@/utils/index'

const logo = imgLocalUrl('@/assets/load/logo.png')
const close = imgLocalUrl('@/assets/load/close.png')

const WebData = reactive({
  time: 0,
})

onMounted(() => {
  setTimeout(() => {
    window.electronAPI.isShowLogin(false)
  }, 1000 * 3)
})
</script>

<style lang="scss" scoped>
.load-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-primary);
  border-radius: 2px 2px 2px 2px;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);

  .close-btn {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
  }
  .close-btn:hover {
    opacity: 0.8;
  }
  .load-main {
    display: flex;
    align-items: center;
    position: absolute;
    left: 110px;
    top: 98px;
    .logo-img {
      width: 58px;
      height: 58px;
      margin-right: 16px;
      display: flex;
    }
    .title {
      width: 180px;
      p:nth-child(1) {
        font-size: 30px;
        font-family: PingFang SC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffffff;
      }
      p:nth-child(2) {
        font-size: 15px;
        font-family: PingFang SC-Semibold, PingFang SC;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }
  .load-process-box {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 14px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    span {
      font-size: 14px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #e6e6e6;
    }
  }
}
</style>
