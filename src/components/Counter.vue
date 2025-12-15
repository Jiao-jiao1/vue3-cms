<template>
  <div class="text-center mt-8">
    <h1 class="text-xl font-semibold">计数器: {{ counter.count }}</h1>
    <div class="mt-6">
      <button
        @click="counter.increment"
        class="mr-2.5 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        增加
      </button>
      <button
        @click="counter.decrement"
        class="mr-2.5 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        减少
      </button>
      <button
        @click="counter.reset"
        class="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
      >
        重置
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../store/counterStore'

// 使用 Pinia store
const counter = useCounterStore()
</script>
