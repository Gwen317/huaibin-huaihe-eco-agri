<script setup>
// 导入必要的组件
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentRoute = ref('/');

// 导航到不同页面
const navigateTo = (path) => {
  currentRoute.value = path;
  router.push(path);
};

onMounted(() => {
  // 返回顶部按钮功能
  const backToTopButton = document.getElementById('backToTop');
  if (backToTopButton) {
    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
</script>

<template>
  <div class="app-container">
    <!-- 顶部横条 -->
    <div class="top-bar">
      <div class="container">
        <div class="welcome">欢迎访问淮滨县淮河生态农业发展投资有限公司!</div>
        <div class="top-links">
          <a href="#">手机版</a>
          <a href="#">旧版网站入口</a>
          <a href="#">设为首页</a>
          <a href="#">加入收藏</a>
        </div>
      </div>
    </div>

    <!-- 头部区域 -->
    <header class="header">
      <div class="container">
        <div class="logo-container">
          <div class="logo">
            <img src="./assets/logo.png" alt="淮河农投" class="company-logo" />
            <div class="company-name">
              <h1>淮滨县淮河生态农业发展投资有限公司</h1>
              <p>HUAIBIN HUAIHE ECOLOGICAL AGRICULTURAL DEVELOPMENT INVESTMENT CO., LTD.</p>
            </div>
          </div>
        </div>
        <div class="search-container">
          <div class="search-box">
            <input type="text" placeholder="输入搜索关键字" />
            <button type="button">
              <i class="search-icon">🔍</i>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- 导航菜单 -->
    <nav class="main-nav">
      <div class="container">
        <ul class="nav-list">
          <li :class="{ active: currentRoute === '/' }">
            <a href="#" @click.prevent="navigateTo('/')">网站首页</a>
          </li>
          <li><a href="#">公司概况</a></li>
          <li><a href="#">企业动态</a></li>
          <li :class="{ active: currentRoute === '/bidding' }">
            <a href="#" @click.prevent="navigateTo('/bidding')">招标采购</a>
          </li>
          <li><a href="#">清廉国企</a></li>
          <li><a href="#">投资项目</a></li>
          <li><a href="#">人力资源</a></li>
          <li><a href="#">下属企业</a></li>
          <li><a href="#">联系我们</a></li>
          <li><a href="#">信息公开</a></li>
        </ul>
      </div>
    </nav>

    <!-- 路由视图 -->
    <router-view></router-view>
    
    <!-- 页脚区域 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-links">
          <a href="#">联系我们</a>
          <span class="separator">|</span>
          <a href="#">主营业务</a>
          <span class="separator">|</span>
          <a href="#">管理入口</a>
        </div>
        <div class="footer-info">
          <p>建设单位: 淮滨县淮河生态农业发展投资有限公司</p>
          <p>317提供技术支持</p>
          <p> Copyright © 2024 </p>
        </div>
        <div class="back-to-top">
          <a href="#" id="backToTop">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="16 12 12 8 8 12"></polyline>
              <line x1="12" y1="16" x2="12" y2="8"></line>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* 全局样式 */
html {
  scroll-behavior: smooth;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  line-height: 1.5;
  color: #333;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

/* 顶部横条 */
.top-bar {
  background-color: #f5f5f5;
  padding: 5px 0;
  font-size: 12px;
}

.top-bar .container {
  display: flex;
  justify-content: space-between;
}

.top-links a {
  margin-left: 15px;
  color: #666;
}

.top-links a.highlight {
  color: #e60000;
}

/* 头部区域 */
.header {
  padding: 15px 0;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.company-logo {
  height: 80px;
  margin-right: 15px;
  object-fit: contain;
}

.company-name h1 {
  font-size: 24px;
  margin: 0;
}

.company-name p {
  font-size: 12px;
  color: #666;
}

.search-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.search-box {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.search-box input {
  padding: 8px 12px;
  border: none;
  outline: none;
  width: 200px;
}

.search-box button {
  background-color: #f5f5f5;
  border: none;
  padding: 0 15px;
  cursor: pointer;
}

/* 导航菜单 */
.main-nav {
  background-color: #4CAF50;
}

.nav-list {
  display: flex;
  justify-content: space-between;
}

.nav-list li {
  flex: 1;
  text-align: center;
}

.nav-list li a {
  display: block;
  padding: 15px 0;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s;
}

.nav-list li.active a,
.nav-list li a:hover {
  background-color: #f39c12;
}

/* 轮播图区域 */
.banner {
  background: url('./assets/banner-bg.jpg') no-repeat center center;
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

/* 页脚样式 */
.footer {
  background-color: #222;
  color: #fff;
  padding: 30px 0;
  margin-top: 40px;
}

.footer-links {
  text-align: center;
  margin-bottom: 20px;
}

.footer-links a {
  color: #fff;
  margin: 0 10px;
  font-size: 14px;
}

.separator {
  color: #555;
}

.footer-info {
  text-align: center;
  color: #999;
  font-size: 12px;
  line-height: 1.8;
}

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
}

.back-to-top a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #fff;
  transition: all 0.3s;
}

.back-to-top a:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
</style>
