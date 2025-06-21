<template>
  <div class="bidding-container">
    <div class="search-section">
      <div class="search-box">
        <input type="text" v-model="searchKeyword" placeholder="搜索关键词" class="search-input" @keyup.enter="handleSearch">
        <button class="search-button" @click="handleSearch">搜索</button>
      </div>
      <div class="filter-tabs">
        <span 
          v-for="(item, index) in filterCategories" 
          :key="index" 
          class="filter-item" 
          :class="{ active: currentFilter === item.value }"
          @click="filterByCategory(item.value)"
        >
          {{ item.label }}
        </span>
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
          <tr v-for="(item, index) in filteredBiddingList" :key="index" @click="viewDetail(item.id)">
            <td>
              <span class="status-tag">{{ item.status }}</span>
            </td>
            <td class="title-cell">{{ item.title }}</td>
            <td>{{ item.company }}</td>
            <td>{{ item.deadline }}</td>
            <td>
              <a href="javascript:void(0)" class="action-link" @click.stop="applyBidding(item.id)">立即报名</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="no-data" v-if="filteredBiddingList.length === 0">
      <p>没有找到符合条件的招标项目</p>
    </div>

    <div class="pagination">
      <a href="javascript:void(0)" class="prev-page" @click="prevPage" :class="{ disabled: currentPage === 1 }">&lt;</a>
      <a 
        v-for="page in totalPages" 
        :key="page" 
        href="javascript:void(0)" 
        class="page-number" 
        :class="{ active: currentPage === page }"
        @click="goToPage(page)"
      >
        {{ page }}
      </a>
      <a href="javascript:void(0)" class="next-page" @click="nextPage" :class="{ disabled: currentPage === totalPages }">&gt;</a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchKeyword = ref('');
const currentFilter = ref('all');
const currentPage = ref(1);
const pageSize = 5;

// 招标列表数据
const biddingList = ref([
  {
    id: '1',
    status: '已截止',
    title: '2024年淮滨县张庄乡、王店乡、固城乡高标准农田建设项目',
    company: '淮滨县淮河生态农业发展投资有限公司2024年淮滨县张庄乡、王店乡、固城乡高标准农田示范区建设项目部',
    deadline: '2025-05-14 23:59:59',
    category: 'equipment'
  },
  {
    id: '2',
    status: '已截止',
    title: '2024年淮滨县邓湾乡、马集镇、三空桥乡高标准农田建设项目',
    company: '淮滨县淮河生态农业发展投资有限公司2024年淮滨县邓湾乡、马集镇、三空桥乡高标准农田示范区建设项目部',
    deadline: '2025-04-16 23:59:59',
    category: 'equipment'
  },
  {
    id: '3',
    status: '已截止',
    title: '2024年淮滨县邓湾乡、马集镇、三空桥乡高标准农田建设项目',
    company: '淮滨县淮河生态农业发展投资有限公司2024年淮滨县邓湾乡、马集镇、三空桥乡高标准农田示范区建设项目部',
    deadline: '2025-03-16 23:59:00',
    category: 'machinery'
  },
  {
    id: '4',
    status: '已截止',
    title: '变更公告',
    company: '淮滨县淮河生态农业发展投资有限公司2024年淮滨县张庄乡、王店乡、固城乡高标准农田示范区建设项目部',
    deadline: '2025-03-24 23:59:59',
    category: 'other'
  },
  {
    id: '5',
    status: '已截止',
    title: '2024年淮滨县张庄乡、王店乡、固城乡高标准农田建设项目',
    company: '淮滨县淮河生态农业发展投资有限公司2024年淮滨县张庄乡、王店乡、固城乡高标准农田示范区建设项目部',
    deadline: '2025-02-24 23:59:59',
    category: 'subcontract'
  }
]);

// 过滤分类
const filterCategories = [
  { label: '全部', value: 'all' },
  { label: '物资设备采购', value: 'equipment' },
  { label: '机械租赁', value: 'machinery' },
  { label: '专业分包', value: 'subcontract' },
  { label: '劳务分包', value: 'labor' },
  { label: '其它采购', value: 'other' }
];

// 根据关键词和分类过滤招标列表
const filteredBiddingList = computed(() => {
  let result = [...biddingList.value];
  
  // 按关键词过滤
  if (searchKeyword.value) {
    const keyword = searchKeyword.value.toLowerCase();
    result = result.filter(item => 
      item.title.toLowerCase().includes(keyword) || 
      item.company.toLowerCase().includes(keyword)
    );
  }
  
  // 按分类过滤
  if (currentFilter.value !== 'all') {
    result = result.filter(item => item.category === currentFilter.value);
  }
  
  // 分页
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  
  return result.slice(startIndex, endIndex);
});

// 计算总页数
const totalPages = computed(() => {
  let filteredTotal = biddingList.value;
  
  if (searchKeyword.value) {
    const keyword = searchKeyword.value.toLowerCase();
    filteredTotal = filteredTotal.filter(item => 
      item.title.toLowerCase().includes(keyword) || 
      item.company.toLowerCase().includes(keyword)
    );
  }
  
  if (currentFilter.value !== 'all') {
    filteredTotal = filteredTotal.filter(item => item.category === currentFilter.value);
  }
  
  return Math.ceil(filteredTotal.length / pageSize) || 1;
});

// 搜索处理
const handleSearch = () => {
  currentPage.value = 1;
};

// 分类过滤
const filterByCategory = (category) => {
  currentFilter.value = category;
  currentPage.value = 1;
};

// 分页处理
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const goToPage = (page) => {
  currentPage.value = page;
};

// 查看详情
const viewDetail = (id) => {
  router.push(`/bidding/${id}`);
};

// 报名
const applyBidding = (id) => {
  alert('您正在报名招标项目：' + id);
  // 这里可以添加报名逻辑
};
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
  flex-wrap: wrap;
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

tbody tr {
  cursor: pointer;
  transition: background-color 0.3s;
}

tbody tr:hover {
  background-color: #f5f5f5;
}

.title-cell {
  color: #0d4ea2;
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

.no-data {
  text-align: center;
  padding: 30px 0;
  color: #999;
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

.prev-page.disabled, .next-page.disabled {
  color: #ccc;
  cursor: not-allowed;
}
</style> 