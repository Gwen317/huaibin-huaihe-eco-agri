<template>
  <div>
    <!-- 轮播图区域 -->
    <div class="banner">
      <div class="container">
        <div class="banner-content">
          <div class="banner-image">
            <!-- 轮播图内容 -->
            <div class="carousel-container">
              <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                <div class="carousel-slide" v-for="(slide, index) in carouselSlides" :key="index">
                  <img :src="slide.image" :alt="slide.title" class="carousel-image">
                  <div class="carousel-caption">
                    <h3>{{ slide.title }}</h3>
                    <p>{{ slide.description }}</p>
                  </div>
                </div>
              </div>
              <div class="carousel-indicators">
                <span 
                  v-for="(slide, index) in carouselSlides" 
                  :key="index" 
                  class="indicator" 
                  :class="{ active: currentSlide === index }"
                  @click="goToSlide(index)"
                ></span>
              </div>
              <div class="slider-controls">
                <button class="prev" @click="prevSlide">❮</button>
                <button class="next" @click="nextSlide">❯</button>
              </div>
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
            <div class="announcement-item" v-for="(item, index) in announcements" :key="index">
              <span class="announcement-date">{{ item.date }}</span>
              <a href="javascript:void(0)" class="announcement-title">{{ item.title }}</a>
            </div>
            <div class="view-more">
              <a href="javascript:void(0)">查看更多 &gt;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// 轮播图数据
const carouselSlides = ref([
  {
    title: '淮滨县淮河生态农业发展投资有限公司',
    description: '致力于推动农业现代化和乡村振兴',
    image: '../assets/banner-bg.jpg'
  },
  {
    title: '高标准农田建设项目',
    description: '打造现代化农田示范区',
    image: '../assets/banner-bg.jpg'
  },
  {
    title: '水产养殖基地',
    description: '发展生态水产养殖产业',
    image: '../assets/banner-bg.jpg'
  }
]);

// 公告数据
const announcements = ref([
  { title: '关于2024年淮滨县高标准农田建设项目招标结果公示', date: '2024-05-20' },
  { title: '淮滨县淮河生态农业发展投资有限公司2024年第二季度财务报表公示', date: '2024-05-15' },
  { title: '关于淮滨县农业产业园区规划环评公示', date: '2024-05-10' },
  { title: '2024年农业科技示范推广项目申报通知', date: '2024-05-05' }
]);

// 轮播图逻辑
const currentSlide = ref(0);
let autoplayInterval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselSlides.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + carouselSlides.value.length) % carouselSlides.value.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000); // 每5秒切换一次
};

onMounted(() => {
  startAutoplay();
});

onBeforeUnmount(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
});
</script>

<style scoped>
/* 轮播图区域 */
.banner {
  background-color: #f5f5f5;
  color: #fff;
  padding: 30px 0;
}

.banner-image {
  position: relative;
  height: 400px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  color: white;
}

.carousel-caption h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.indicator.active {
  background-color: white;
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
  z-index: 10;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.announcement-item:last-child {
  border-bottom: none;
}

.announcement-date {
  color: #666;
  font-size: 14px;
}

.announcement-title {
  flex: 1;
  margin-left: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.announcement-title:hover {
  color: #0d4ea2;
}

.view-more {
  text-align: right;
  margin-top: 15px;
}

.view-more a {
  color: #0d4ea2;
  font-size: 14px;
}
</style> 