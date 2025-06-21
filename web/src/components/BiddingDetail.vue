<template>
  <div class="bidding-detail-container">
    <div class="detail-header">
      <h2>{{ bidding.title }}</h2>
      <div class="meta-info">
        <span class="meta-item">发布时间：{{ bidding.publishDate }}</span>
        <span class="meta-item">截止时间：{{ bidding.deadline }}</span>
        <span class="meta-item">状态：<span class="status-tag">{{ bidding.status }}</span></span>
      </div>
    </div>
    
    <div class="detail-content">
      <div class="detail-section">
        <h3>招标单位</h3>
        <p>{{ bidding.company }}</p>
      </div>
      
      <div class="detail-section">
        <h3>招标内容</h3>
        <div class="content-text" v-html="bidding.content"></div>
      </div>
      
      <div class="detail-section">
        <h3>招标要求</h3>
        <ul class="requirement-list">
          <li v-for="(req, index) in bidding.requirements" :key="index">{{ req }}</li>
        </ul>
      </div>
      
      <div class="detail-section">
        <h3>联系方式</h3>
        <p>联系人：{{ bidding.contact.name }}</p>
        <p>电话：{{ bidding.contact.phone }}</p>
        <p>邮箱：{{ bidding.contact.email }}</p>
        <p>地址：{{ bidding.contact.address }}</p>
      </div>
      
      <div class="detail-section">
        <h3>附件下载</h3>
        <div class="attachment-list">
          <div v-for="(file, index) in bidding.attachments" :key="index" class="attachment-item">
            <span class="file-name">{{ file.name }}</span>
            <a :href="file.url" class="download-btn">下载</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="action-bar">
      <button class="apply-btn" v-if="bidding.status !== '已截止'">立即报名</button>
      <button class="back-btn" @click="goBack">返回列表</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const bidding = ref({
  id: '1',
  title: '2024年淮滨县张庄乡、王店乡、固城乡高标准农田建设项目',
  status: '已截止',
  publishDate: '2024-04-14',
  deadline: '2025-05-14 23:59:59',
  company: '淮滨县淮河生态农业发展投资有限公司2024年淮滨县张庄乡、王店乡、固城乡高标准农田示范区建设项目部',
  content: `
    <p>淮滨县淮河生态农业发展投资有限公司关于2024年淮滨县张庄乡、王店乡、固城乡高标准农田建设项目的招标公告。</p>
    <p>根据《中华人民共和国招标投标法》等有关法律法规，现对2024年淮滨县张庄乡、王店乡、固城乡高标准农田建设项目进行公开招标，欢迎符合条件的供应商参加投标。</p>
    <p><strong>一、项目概况</strong></p>
    <p>1. 项目名称：2024年淮滨县张庄乡、王店乡、固城乡高标准农田建设项目</p>
    <p>2. 建设地点：淮滨县张庄乡、王店乡、固城乡</p>
    <p>3. 建设规模：高标准农田建设总面积约15000亩</p>
    <p>4. 建设内容：包括土地平整、灌溉与排水、田间道路、农田防护与生态环境保持等工程</p>
    <p>5. 计划工期：240日历天</p>
    <p>6. 预算金额：约3000万元</p>
  `,
  requirements: [
    '投标人须具备水利水电工程施工总承包叁级及以上资质',
    '项目经理须具备水利水电工程专业贰级及以上注册建造师执业资格',
    '投标人近三年承担过类似工程施工业绩',
    '投标人须提供近三年财务状况良好的证明材料',
    '投标人须具有有效的安全生产许可证'
  ],
  contact: {
    name: '张先生',
    phone: '0376-XXXXXXXX',
    email: 'bidding@hhagri.com',
    address: '河南省淮滨县城关镇淮河大道与滨河路交叉口'
  },
  attachments: [
    { name: '招标文件.pdf', url: '#' },
    { name: '工程量清单.xlsx', url: '#' },
    { name: '图纸.zip', url: '#' }
  ]
});

onMounted(() => {
  // 实际项目中，这里应该根据路由参数获取招标详情数据
  const id = route.params.id;
  console.log('加载招标ID:', id);
  // 这里应该调用API获取详情数据
  // loadBiddingDetail(id);
});

const goBack = () => {
  router.push('/bidding');
};
</script>

<style scoped>
.bidding-detail-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 15px;
}

.detail-header {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.detail-header h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

.meta-info {
  display: flex;
  flex-wrap: wrap;
  color: #666;
  font-size: 14px;
}

.meta-item {
  margin-right: 20px;
  margin-bottom: 10px;
}

.status-tag {
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.detail-section {
  margin-bottom: 30px;
}

.detail-section h3 {
  font-size: 18px;
  margin-bottom: 15px;
  padding-left: 10px;
  border-left: 4px solid #0d4ea2;
}

.content-text {
  line-height: 1.8;
}

.requirement-list li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.requirement-list li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #0d4ea2;
}

.attachment-list {
  border: 1px solid #eee;
  border-radius: 4px;
}

.attachment-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
}

.attachment-item:last-child {
  border-bottom: none;
}

.file-name {
  display: flex;
  align-items: center;
}

.file-name:before {
  content: "📄";
  margin-right: 10px;
}

.download-btn {
  padding: 5px 15px;
  background-color: #0d4ea2;
  color: white;
  border-radius: 4px;
  font-size: 14px;
}

.action-bar {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.apply-btn, .back-btn {
  padding: 10px 30px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  border: none;
}

.apply-btn {
  background-color: #0d4ea2;
  color: white;
}

.back-btn {
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
}
</style> 