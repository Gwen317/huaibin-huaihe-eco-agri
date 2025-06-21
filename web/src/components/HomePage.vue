<template>
  <div>
    <!-- 轮播图区域 -->
    <div class="banner">
      <div class="container">
        <div class="banner-content">
          <div class="banner-image">
            <!-- 轮播图内容 -->
            <div class="slider-controls">
              <button class="prev">❮</button>
              <button class="next">❯</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 业务图标区域 -->
    <div class="business-icons">
      <div class="container">
        <div class="icon-list">
          <div class="icon-item">
            <div class="icon blue">
              <i>🏢</i>
            </div>
            <span>淮河湿地</span>
          </div>
          <div class="icon-item">
            <div class="icon purple">
              <i>🏭</i>
            </div>
            <span>资产产业</span>
          </div>
          <div class="icon-item">
            <div class="icon green">
              <i>🌱</i>
            </div>
            <span>土地开发</span>
          </div>
          <div class="icon-item">
            <div class="icon light-green">
              <i>🏡</i>
            </div>
            <span>淮滨县国有</span>
          </div>
          <div class="icon-item">
            <div class="icon blue">
              <i>💧</i>
            </div>
            <span>水产养殖</span>
          </div>
          <div class="icon-item">
            <div class="icon orange">
              <i>💰</i>
            </div>
            <span>收购实物</span>
          </div>
          <div class="icon-item">
            <div class="icon blue">
              <i>🏛️</i>
            </div>
            <span>三农金融</span>
          </div>
          <div class="icon-item">
            <div class="icon pink">
              <i>🌟</i>
            </div>
            <span>扶贫城乡</span>
          </div>
          <div class="icon-item">
            <div class="icon blue">
              <i>🏞️</i>
            </div>
            <span>旅游产业</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 公告区域 -->
    <div class="announcement">
      <div class="container">
        <div class="announcement-box">
          <h3>公示公告</h3>
          <div class="announcement-content">
            <div class="announcement-item">
              <span>评标结果公示</span>
            </div>
            <div class="announcement-item">
              <span>评标结果公示</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 主页组件逻辑
</script>

<style scoped>
/* 轮播图区域 */
.banner {
  background: url('../assets/banner-bg.jpg') no-repeat center center;
  background-size: cover;
  color: #fff;
  padding: 30px 0;
}

.banner-title {
  font-size: 36px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  background-color: rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 5px;
  display: inline-block;
}

.banner-image {
  position: relative;
  height: 300px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-controls button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  padding: 15px;
  font-size: 24px;
  cursor: pointer;
}

.slider-controls .prev {
  left: 10px;
}

.slider-controls .next {
  right: 10px;
}

.banner-content {
  width: 100%;
  padding: 20px 0;
}

/* 业务图标区域 */
.business-icons {
  padding: 20px 0;
  background-color: #f9f9f9;
}

.icon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 9);
  margin-bottom: 15px;
}

.icon {
  width: 60px;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  color: white;
  font-size: 24px;
}

.icon.blue {
  background-color: #3498db;
}

.icon.purple {
  background-color: #9b59b6;
}

.icon.green {
  background-color: #2ecc71;
}

.icon.light-green {
  background-color: #8bc34a;
}

.icon.orange {
  background-color: #f39c12;
}

.icon.pink {
  background-color: #e91e63;
}

.icon-item span {
  font-size: 12px;
  text-align: center;
}

/* 公告区域 */
.announcement {
  padding: 20px 0;
}

.announcement-box {
  background-color: #e8f5e9;
  border-radius: 5px;
  padding: 15px;
}

.announcement-box h3 {
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.announcement-item {
  padding: 10px 0;
  border-bottom: 1px dashed #ddd;
}

.announcement-item:last-child {
  border-bottom: none;
}
</style> 