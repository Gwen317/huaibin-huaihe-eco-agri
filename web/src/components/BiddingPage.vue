<template>
  <div class="bidding-container">
    <div class="search-section">
      <div class="search-box">
        <input type="text" placeholder="搜索关键词" class="search-input">
        <button class="search-button">搜索</button>
      </div>
      <div class="filter-tabs">
        <span class="filter-item active">全部</span>
        <span class="filter-item">物资设备采购</span>
        <span class="filter-item">机械租赁</span>
        <span class="filter-item">专业分包</span>
        <span class="filter-item">劳务分包</span>
        <span class="filter-item">其它采购</span>
      </div>
    </div>

    <div class="bidding-table">
      <table>
        <thead>
          <tr>
            <th width="10%">状态</th>
            <th width="30%">招标名称</th>
            <th width="30%">招标单位</th>
            <th width="15%">截止时间</th>
            <th width="15%">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in biddingList" :key="index">
            <td>
              <span class="status-tag">{{ item.status }}</span>
            </td>
            <td>{{ item.title }}</td>
            <td>{{ item.company }}</td>
            <td>{{ item.deadline }}</td>
            <td>
              <a href="#" class="action-link">立即报名</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination">
      <a href="#" class="prev-page">&lt;</a>
      <a href="#" class="page-number active">1</a>
      <a href="#" class="next-page">&gt;</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 招标列表数据
const biddingList = ref([
  {
    status: '已截止',
    title: '2024年淮滨县张庄乡、王店乡、固城乡高标准农田建设项目',
    company: '河南金达建设工程有限公司2024年淮滨县张庄乡、王店乡、固城乡高标准农田示范区建设项目部',
    deadline: '2025-05-14 23:59:59'
  },
  {
    status: '已截止',
    title: '2024年淮滨县邓湾乡、马集镇、三空桥乡高标准农田建设项目',
    company: '河南金达建设工程有限公司2024年淮滨县邓湾乡、马集镇、三空桥乡高标准农田示范区建设项目部',
    deadline: '2025-04-16 23:59:59'
  },
  {
    status: '已截止',
    title: '2024年淮滨县邓湾乡、马集镇、三空桥乡高标准农田建设项目',
    company: '河南金达建设工程有限公司2024年淮滨县邓湾乡、马集镇、三空桥乡高标准农田示范区建设项目部',
    deadline: '2025-03-16 23:59:00'
  },
  {
    status: '已截止',
    title: '变更公告',
    company: '河南金达建设工程有限公司2024年淮滨县张庄乡、王店乡、固城乡高标准农田示范区建设项目部',
    deadline: '2025-03-24 23:59:59'
  },
  {
    status: '已截止',
    title: '2024年淮滨县张庄乡、王店乡、固城乡高标准农田建设项目',
    company: '河南金达建设工程有限公司2024年淮滨县张庄乡、王店乡、固城乡高标准农田示范区建设项目部',
    deadline: '2025-02-24 23:59:59'
  }
]);
</script>

<style scoped>
.bidding-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px;
}

.search-section {
  margin-bottom: 20px;
}

.search-box {
  display: flex;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
}

.search-button {
  padding: 10px 20px;
  background-color: #0d4ea2;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 14px;
}

.filter-tabs {
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}

.filter-item {
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
}

.filter-item.active {
  color: #0d4ea2;
  border-bottom: 2px solid #0d4ea2;
}

.bidding-table {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background-color: #f9f9f9;
  font-weight: normal;
}

.status-tag {
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.action-link {
  color: #0d4ea2;
  text-decoration: none;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.prev-page, .next-page, .page-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border: 1px solid #ddd;
  text-decoration: none;
  color: #333;
}

.page-number.active {
  background-color: #0d4ea2;
  color: white;
  border-color: #0d4ea2;
}
</style> 