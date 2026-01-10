---
layout: home
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.location.href = '/zh/'
})
</script>

<div style="text-align: center; padding: 2rem;">
  <p>正在跳转到中文页面...</p>
  <p>Redirecting to Chinese version...</p>
  <p><a href="/zh/">点击这里</a> 如果没有自动跳转</p>
  <p><a href="/zh/">Click here</a> if not redirected automatically</p>
</div>
