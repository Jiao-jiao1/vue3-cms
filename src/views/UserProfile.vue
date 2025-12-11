<template>
  <div>
    <h1>用户 ID: {{ userId }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

// 获取动态路由的参数
const route = useRoute()
const userId = route.params.id
</script>
