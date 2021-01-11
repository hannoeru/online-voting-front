<template>
  <div class="inline-flex flex-col space-y-3 text-left">
    <button class="px-3 py-1.5 text-white rounded-lg bg-orange focus:outline-none focus:ring-1">
      投票を作成する
    </button>
    <div class="px-3 py-2 text-gray-400 bg-white rounded-lg">
      <p class="px-1 mb-2 text-xl font-semibold text-blue-900">
        カテゴリー
      </p>
      <div class="grid grid-cols-1">
        <router-link
          v-for="item in categroy"
          :key="item.slog"
          v-slot="{ isActive }"
          to="/"
          class="px-2 py-1.5 rounded-lg hover:bg-gray-100 focus:bg-gray-200"
          :class="{'bg-gray-200': isActive}"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const categroy = ref([
  {
    name: '政治',
    slog: '政治',
  },
  {
    name: '食べ物',
    slog: '食べ物',
  },
  {
    name: '生活',
    slog: '生活',
  },
  {
    name: '恋愛',
    slog: '恋愛',
  },
])
</script>

<style>

</style>
